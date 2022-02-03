import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IIconRadioProps, IconRadio } from "./IconRadio";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { IconNames } from "../..";

export default {
  title: "Components/IconRadio",
  component: IconRadio,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IIconRadioProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <IconRadio {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: "Name",
  options: [
    { Key: "Small", Value: "Small", iconName: IconNames.car },
    { Key: "Medium", Value: "Medium", iconName: IconNames.van },
    { Key: "Large", Value: "Large", iconName: IconNames.truck },
  ],
  defaultValue: "Medium",
};
