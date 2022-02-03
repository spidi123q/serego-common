import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { INavigationProps, Navigation } from "./Navigation";
import { UserPermissions } from "../../models/enum";
import { InitialUser } from "../../models/User";
import { IconNames } from "../simpleIcon/helper";

export default {
  title: "Components/Navigation",
  component: Navigation,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<INavigationProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <Navigation {...args}>
        <div>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It
        </div>
      </Navigation>
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  navigationItems: [
    {
      title: "Dashboard",
      path: "RoutePath.BookingsPage",
      icon: IconNames.home,
      selected: false,
    },
    {
      title: "My Shipment",
      path: "RoutePath.OrganizationsPage",
      icon: IconNames.package,
      selected: false,
      subNavigationItems: [
        {
          title: "Shipments",
          path: "RoutePath.BookingsPage",
          icon: IconNames.home,
          selected: false,
        },
        {
          title: "Truck Bookings",
          path: "RoutePath.BookingsPage",
          icon: IconNames.home,
          selected: false,
        },
      ],
    },
    {
      title: "Reports",
      path: "RoutePath.UsersPage",
      icon: IconNames.report,
      selected: false,
    },
    {
      title: "Support",
      icon: IconNames["life-gaurd"],
      selected: false,
    },
  ],
  headerActions: [],
  headerTitle: "Tilte",
  user: InitialUser,
  clearHeaderActions: () => {},
};
