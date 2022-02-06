import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import {
  ISkeletonPlaceholderProps,
  SkeletonPlaceholder,
} from "./SkeletonPlaceholder";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/SkeletonPlaceholder",
  component: SkeletonPlaceholder,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISkeletonPlaceholderProps> = (args) => (
  <StoryBookTemplate>
    <SkeletonPlaceholder {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  count: 5,
};
