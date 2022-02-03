import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {
  IOperationCompletedProps,
  OperationCompleted,
} from "./OperationCompleted";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/OperationCompleted",
  component: OperationCompleted,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IOperationCompletedProps> = (args) => (
  <StoryBookTemplate>
    <OperationCompleted {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  title: "Truck booking successfully completed.",
  subTitle: "Please wait for the response from trucking company for details.",
  caption: "Delivery ID: 425112",
  viewButtonLabel: "View Booking Details",
  viewPagePath: "/",
  status: "success",
};
