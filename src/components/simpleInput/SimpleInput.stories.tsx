import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ISimpleInputProps, SimpleInput } from "./SimpleInput";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/Input",
  component: SimpleInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleInputProps> = (args) => (
  <div style={{ width: "20rem" }}>
    <StoryBookTemplate>
      <SimpleInput label {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: "Name",
};
