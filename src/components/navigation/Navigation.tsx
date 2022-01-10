import React, { useState, useEffect } from "react";
import Cx from "classnames";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import _ from "lodash";
import LinearProgress from "@mui/material/LinearProgress";
import Hidden from "@mui/material/Hidden";
import { UserPermissions } from "../../models/enum";
import { IUserMenuProps, UserMenu } from "./UserMenu";
import { isAuthorized } from "../../helpers/auth";
import { IHeaderAction } from "../../models/HeaderAction";
import MenuIcon from "@mui/icons-material/Menu";
import { styles } from "./Navigation.style";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { IconNames } from "../simpleIcon/helper";
import { useIsSmScreen } from "../../hooks/mediaQuery";

export interface INavigationProps extends IUserMenuProps {
  pathname: string;
  isLoading: boolean;
  headerActions: IHeaderAction[];
  navigationItems: INavigationItem[];
  headerTitle: string;
  userPermissions: UserPermissions[];
  children?: JSX.Element;
  clearHeaderActions(): any;
  historyPush(pathname: string): void;
}

export const Navigation: React.FunctionComponent<INavigationProps> = (
  props
) => {
  const {
    children,
    pathname,
    isLoading,
    headerActions,
    headerTitle,
    clearHeaderActions,
    userPermissions,
    navigationItems,
    historyPush,
    enqueueSnackbar,
    user,
  } = props;
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const classes = styles();
  const isSm = useIsSmScreen();

  //Apply authorization
  let navItemList = navigationItems.filter((navItem) =>
    navItem.permission
      ? isAuthorized(userPermissions, navItem.permission)
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

  const selectedNavItem = _.find(navItemList, { selected: true });

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
              item.path && historyPush(item.path);
              item.onClick && item.onClick();
              clearHeaderActions();
              isDrawerOpen && handleDrawerToggle();
            }
          }}
        >
          <ListItemIcon>
            <Icon color={item.selected ? "primary" : undefined}>
              {item.icon}
            </Icon>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography color={item.selected ? "primary" : undefined}>
                {item.title}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
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
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
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
          <UserMenu enqueueSnackbar={enqueueSnackbar} user={user} />
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
        <Box sx={{ overflow: "auto" }}>{drawerContent}</Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        {isLoading && <LinearProgress color="secondary" />}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h6" noWrap className={classes.toolbarTitle}>
            {headerTitle
              ? headerTitle
              : selectedNavItem && selectedNavItem.title}
          </Typography>
          {headerActions.map((action, index) => (
            <IconButton
              onClick={(ev) => action.onClick(ev)}
              color="inherit"
              key={index}
            >
              <Icon>{action.icon}</Icon>
            </IconButton>
          ))}
          <UserMenu enqueueSnackbar={enqueueSnackbar} user={user} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Drawer
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerContent}
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div />
        {children}
      </main>
    </div>
  );
};

const drawerWidth = 240;

export interface INavigationItem {
  title: string;
  path?: string;
  icon: string;
  selected: boolean;
  permission?: UserPermissions;
  onClick?(): void;
}
