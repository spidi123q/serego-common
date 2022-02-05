import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import {
  IPlacesAutocompleteProps,
  PlacesAutocomplete,
} from "./PlacesAutocomplete";

export default {
  title: "Components/PlacesAutocomplete",
  component: PlacesAutocomplete,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IPlacesAutocompleteProps> = (args) => (
  <StoryBookTemplate>
    <PlacesAutocomplete {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  label: "Add location",
};
