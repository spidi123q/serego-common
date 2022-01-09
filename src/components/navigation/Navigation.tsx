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
import { InitialUser } from "../../models/User";
import { styles } from "./Navigation.style";

export interface INavigationProps extends IUserMenuProps {
  pathname: string;
  isLoading: boolean;
  headerActions: IHeaderAction[];
  navigationItems: INavigationItem[];
  headerTitle: string;
  userPermissions: UserPermissions[];
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
    <>
      <div className={Cx("center-all-direction", classes.toolbar)}>
        <Typography variant="h6" color="textSecondary">
          Menu
        </Typography>
      </div>
      <Divider />
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
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawerContent}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export interface INavigationItem {
  title: string;
  path?: string;
  icon: string;
  selected: boolean;
  permission?: UserPermissions;
  onClick?(): void;
}
