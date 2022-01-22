import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import {
  AsyncAutocomplete,
  IAsyncAutocompleteProps,
} from "./AsyncAutocomplete";

export default {
  title: "Components/AsyncAutocomplete",
  component: AsyncAutocomplete,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IAsyncAutocompleteProps<any, any>> = (args) => (
  <StoryBookTemplate>
    <AsyncAutocomplete {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: "Users",
};
