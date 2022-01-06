import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import SimpleButton, { ISimpleButtonProps } from "./SimpleButton";

export default {
  title: "Components/Button",
  component: SimpleButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleButtonProps> = (args) => (
  <SimpleButton {...args} />
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  children: "Click me",
};
