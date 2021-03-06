import React from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Grid from "@mui/material/Grid";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import { IAvatarListItem } from "../AvatarList";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { IconNames } from "../simpleIcon/helper";
import { IUser } from "../../models/User";
import useLoginActions from "../../hooks/useLoginActions";
import { getIdToken } from "../../helpers/auth";
import { useSnackbar } from "notistack";
import Face from "@mui/icons-material/Face";
import Mail from "@mui/icons-material/MailOutline";
import Security from "@mui/icons-material/Security";
import PowerSettingsNew from "@mui/icons-material/PowerSettingsNew";
import FileCopy from "@mui/icons-material/FileCopyOutlined";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export interface IUserMenuProps {
  user: IUser;
  profilePagePath: string;
}

export const UserMenu: React.FunctionComponent<IUserMenuProps> = (props) => {
  const { user, profilePagePath } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { logout } = useLoginActions();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const listItems: IAvatarListItem[] = [
    {
      icon: <Face />,
      title: user.name ?? "",
      description: "Name",
      actions: [
        {
          icon: <EditIcon />,
          onClick: async () => {
            navigate(profilePagePath);
          },
        },
      ],
    },
    {
      icon: <Security />,
      title: user.role,
      description: "Role",
      actions: [
        {
          icon: <FileCopy />,
          onClick: async () => {
            try {
              const token = await getIdToken();
              await navigator.clipboard.writeText(token ?? "");
              enqueueSnackbar("Auth token copied");
            } catch (err) {
              enqueueSnackbar((err as Error).message, { variant: "error" });
            }
          },
        },
      ],
    },
  ];

  const signOut = async () => {
    logout();
    enqueueSnackbar("Please wait until system logout");
  };

  return (
    <>
      <IconButton
        color="inherit"
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className="navigation-root__navIcons"
      >
        <SimpleIcon name={IconNames.user} />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <div>
                  <List dense={true}>
                    {listItems.map((item, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={item.title} />
                        {item.actions && (
                          <ListItemSecondaryAction>
                            {item.actions.map((action, index) => (
                              <IconButton
                                key={index}
                                edge="end"
                                onClick={(ev) => {
                                  action.onClick();
                                  handleClose(ev);
                                }}
                              >
                                {action.icon}
                              </IconButton>
                            ))}
                          </ListItemSecondaryAction>
                        )}
                      </ListItem>
                    ))}
                  </List>
                  <Grid item container xs={12} justifyContent="center">
                    <IconButton color="error" onClick={signOut}>
                      <PowerSettingsNew />
                    </IconButton>
                  </Grid>
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};
