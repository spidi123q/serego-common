import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SimpleThemeProvider } from "../SimpleThemeProvider";
import { INavigationProps, Navigation } from "./Navigation";
import { UserPermissions } from "../../models/enum";
import { InitialUser } from "../../models/User";

export default {
  title: "Components/Navigation",
  component: Navigation,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<INavigationProps> = (args) => (
  <div style={{ width: "20rem" }}>
    <SimpleThemeProvider>
      <Navigation {...args} />
    </SimpleThemeProvider>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  navigationItems: [
    {
      title: "Bookings",
      path: "RoutePath.BookingsPage",
      icon: "calendar_today",
      selected: false,
    },
    {
      title: "Organizations",
      path: "RoutePath.OrganizationsPage",
      icon: "corporate_fare",
      selected: false,
    },
    {
      title: "Users",
      path: "RoutePath.UsersPage",
      icon: "people_outline",
      selected: false,
    },
    {
      title: "API Catalogue",
      icon: "http",
      selected: false,
    },
  ],
  pathname: "RoutePath.BookingsPage",
  headerActions: [],
  headerTitle: "Tilte",
  userPermissions: [
    UserPermissions.ReadOrganization,
    UserPermissions.ReadUser,
    UserPermissions.ReadUserSelf,
    UserPermissions.WriteUserSelf,
  ],
  user: InitialUser,
  clearHeaderActions: () => {},
  historyPush: () => {},
};
