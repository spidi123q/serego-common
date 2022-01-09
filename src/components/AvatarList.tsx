import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import _ from "lodash";
import { Theme } from "@mui/material/styles";

interface IProps {
  items: IAvatarListItem[];
}

export default function AvatarList(props: IProps) {
  const { items } = props;
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {items.map((item, index) => (
        <ListItem
          key={index}
          //@ts-ignore
          button={!_.isNil(item.onClick)}
          onClick={item.onClick}
        >
          <ListItemAvatar>
            <Avatar>
              <Icon color={item.iconColor ?? "primary"}>{item.icon}</Icon>
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            className={classes.description}
            secondary={item.description}
          />
          {item.actions && (
            <ListItemSecondaryAction>
              {item.actions.map((action, index) => (
                <IconButton
                  key={index}
                  color={action.iconColor ?? "primary"}
                  edge="end"
                  onClick={action.onClick}
                  disabled={action.disabled}
                >
                  <Icon>{action.icon}</Icon>
                </IconButton>
              ))}
            </ListItemSecondaryAction>
          )}
        </ListItem>
      ))}
    </List>
  );
}

const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    description: {
      overflowWrap: "break-word",
    },
  })
);

type IconColor =
  | "inherit"
  | "disabled"
  | "action"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

export interface IAvatarListItem {
  icon: string;
  iconColor?: IconColor;
  title: string;
  description: string;
  actions?: {
    icon: string;
    disabled?: boolean;
    iconColor?: "inherit" | "default" | "primary" | "secondary";
    onClick(): void;
  }[];
  onClick?: () => void;
}
