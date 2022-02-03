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
import { find, isEmpty, size } from "lodash";
import { getIcon, IconNames } from "../simpleIcon/helper";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { useSnackbar } from "notistack";
import Menu from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";

export interface INavigationProps extends IUserMenuProps {
  isLoading: boolean;
  headerActions: (IHeaderAction | JSX.Element)[];
  navigationItems: INavigationItem[];
  headerTitle?: string;
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

  const markSelected = (navItemList?: INavigationItem[]): INavigationItem[] => {
    if (!navItemList) {
      return [];
    }
    const items = navItemList.map((item) => {
      if (item.path && pathname.match(item.path)) {
        item.selected = true;
      } else {
        item.selected = false;
      }
      markSelected(item.subNavigationItems);
      return item;
    });
    return items;
  };

  navItemList = markSelected(navItemList);

  const selectedNavItem = find(navItemList, { selected: true });

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToPage = (item: INavigationItem) => {
    if (pathname !== item.path) {
      item.path && navigate(item.path);
      item.onClick && item.onClick();
      clearHeaderActions();
      isDrawerOpen && handleDrawerToggle();
    }
  };

  const drawerContent = (
    <List>
      {navItemList.map((item, index) => (
        <>
          <ListItem
            button
            key={index}
            onClick={() => goToPage(item)}
            className={classNames("navigation-root__drawer-menu-item", {
              "navigation-root__drawer-menu-item--active": item.selected,
              "navigation-root__drawer-menu-item--margin-bottom": isEmpty(
                item.subNavigationItems
              ),
            })}
          >
            {item.icon && (
              <ListItemIcon>
                <SimpleIcon
                  color={item.selected ? "primaryColor" : "colorDark2"}
                  name={item.icon}
                />
              </ListItemIcon>
            )}

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
          {item.subNavigationItems?.map((subItem, index) => (
            <Collapse in={true} timeout="auto" unmountOnExit key={index}>
              <List component="div" disablePadding>
                <ListItemButton
                  onClick={() => goToPage(subItem)}
                  sx={{ pl: 10 }}
                  className={classNames(
                    "navigation-root__drawer-sub-menu-item",
                    {
                      "navigation-root__drawer-sub-menu-item--active":
                        item.selected,
                      "navigation-root__drawer-menu-item--margin-bottom":
                        index === size(item.subNavigationItems) - 1,
                    }
                  )}
                >
                  <ListItemText
                    primary={
                      <SimpleTypography
                        color={subItem.selected ? "primaryColor" : "colorDark2"}
                      >
                        {subItem.title}
                      </SimpleTypography>
                    }
                  />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </>
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
              <Menu />
            </IconButton>
          )}
          {getIcon(IconNames["app-logo"])}
          <Box sx={{ flexGrow: 1 }} />
          {headerActions.map((action, index) =>
            React.isValidElement(action) ? (
              <span
                key={index}
                className="navigation-root__header-action-container"
              >
                {action}
              </span>
            ) : (
              <IconButton
                onClick={(ev) => (action as IHeaderAction).onClick(ev)}
                color="inherit"
                key={index}
                className="navigation-root__header-action-container"
              >
                <Icon>{(action as IHeaderAction).icon}</Icon>
              </IconButton>
            )
          )}
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
  icon?: IconNames;
  selected: boolean;
  permission?: UserPermissions;
  onClick?(): void;
  subNavigationItems?: INavigationItem[];
}
