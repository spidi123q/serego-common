import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { InputUpdate, IInputUpdateProps } from "./InputUpdate";

export default {
  title: "Components/InputUpdate",
  component: InputUpdate,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IInputUpdateProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <InputUpdate {...args} />
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
  type: "select",
  onUpdate: (event) => console.log("onUpdate", event),
};
