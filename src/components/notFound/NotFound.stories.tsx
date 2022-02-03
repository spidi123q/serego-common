import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { NotFound } from "./NotFound";

export default {
  title: "Components/NotFound",
  component: NotFound,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<any> = (args) => (
  <div>
    <StoryBookTemplate>
      <NotFound />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
