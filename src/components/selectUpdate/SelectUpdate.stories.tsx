import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ISelectUpdateProps, SelectUpdate } from "./SelectUpdate";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/SelectUpdate",
  component: SelectUpdate,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISelectUpdateProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <SelectUpdate {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: "Container released",
  defaultValue: "Apple",
  options: [
    { Key: "Apple", Value: "Apple" },
    { Key: "Android", Value: "Android" },
  ],
};
