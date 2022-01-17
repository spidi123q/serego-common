import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { ISimpleItemProps, SimpleItem } from "./SimpleItem";

export default {
  title: "Components/Item",
  component: SimpleItem,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleItemProps> = (args) => (
  <StoryBookTemplate>
    <SimpleItem {...args}>Mina Zayed, Abu Dhabi.</SimpleItem>
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: "Pickup Location",
};
