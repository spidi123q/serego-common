import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Loader, { ILoaderProps } from "./Loader";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ILoaderProps> = (args) => (
  <StoryBookTemplate>
    <Loader {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  type: "brand",
};
