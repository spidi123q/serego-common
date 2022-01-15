import "./Navigation.scss";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import { UserPermissions } from "../../models/enum";
import { IUserMenuProps, UserMenu } from "./UserMenu";
import { isAuthorized } from "../../helpers/auth";
import { IHeaderAction } from "../../models/HeaderAction";
import Box from "@mui/material/Box";
import { useIsSmScreen } from "../../hooks/mediaQuery";
import { find } from "lodash";
import { getIcon, IconNames } from "../simpleIcon/helper";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { useSnackbar } from "notistack";

export interface INavigationProps extends IUserMenuProps {
  isLoading: boolean;
  headerActions: IHeaderAction[];
  navigationItems: INavigationItem[];
  headerTitle?: string;
  children?: JSX.Element;
  clearHeaderActions(): any;
}

export const Navigation: React.FunctionComponent<INavigationProps> = (
  props
) => {
  const {
    children,
    isLoading,
    headerActions,
    headerTitle,
    clearHeaderActions,
    navigationItems,
    user,
  } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const isSm = useIsSmScreen();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { enqueueSnackbar } = useSnackbar();

  //Apply authorization
  let navItemList = navigationItems.filter((navItem) =>
    navItem.permission
      ? isAuthorized(user.permissions, navItem.permission)
      : true
  );

  navItemList = navItemList.map((item) => {
    if (item.path && pathname.match(item.path)) {
      return {
        ...item,
        selected: true,
      };
    } else {
      return {
        ...item,
        selected: false,
      };
    }
  });

  const selectedNavItem = find(navItemList, { selected: true });

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerContent = (
    <List>
      {navItemList.map((item, index) => (
        <ListItem
          button
          key={index}
          onClick={() => {
            if (pathname !== item.path) {
              item.path && navigate(item.path);
              item.onClick && item.onClick();
              clearHeaderActions();
              isDrawerOpen && handleDrawerToggle();
            }
          }}
          className={classNames("navigation-root__drawer-menu-item", {
            "navigation-root__drawer-menu-item--active": item.selected,
          })}
        >
          <ListItemIcon>
            <SimpleIcon
              color={item.selected ? "primaryColor" : "colorDark2"}
              name={item.icon}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <SimpleTypography
                family="medium"
                color={item.selected ? "primaryColor" : "colorDark2"}
              >
                {item.title}
              </SimpleTypography>
            }
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box className="navigation-root" sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        {isLoading && <LinearProgress color="secondary" />}
        <Toolbar>
          {isSm && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <Icon>menu</Icon>
            </IconButton>
          )}
          {getIcon(IconNames["app-logo"])}
          <Box sx={{ flexGrow: 1 }} />
          {headerActions.map((action, index) => (
            <IconButton
              onClick={(ev) => action.onClick(ev)}
              color="inherit"
              key={index}
            >
              <Icon>{action.icon}</Icon>
            </IconButton>
          ))}
          <UserMenu user={user} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isSm ? "temporary" : "permanent"}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
      >
        <Toolbar />
        <Box className="navigation-root__drawer-menu" sx={{ overflow: "auto" }}>
          {drawerContent}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

const drawerWidth = 300;

export interface INavigationItem {
  title: string;
  path?: string;
  icon: IconNames;
  selected: boolean;
  permission?: UserPermissions;
  onClick?(): void;
}
