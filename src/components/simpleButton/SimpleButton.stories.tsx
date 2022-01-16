import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ISimpleButtonProps, SimpleButton } from "./SimpleButton";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { IconNames } from "../simpleIcon/helper";

export default {
  title: "Components/Button",
  component: SimpleButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleButtonProps> = (args) => (
  <StoryBookTemplate>
    <SimpleButton {...args} />
    <br />
    <br />
    <SimpleButton
      variant="contained-dark"
      startIcon={<SimpleIcon name={IconNames.upload} size="sm" />}
    >
      Icon button
    </SimpleButton>
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  children: "Click me",
};
