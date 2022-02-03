import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IListBoxProps, ListBox } from "./ListBox";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/ListBox",
  component: ListBox,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IListBoxProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <ListBox {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: "Make and Model",
      value: "Toyota Hilux, Mitsubishi L200",
    },
    {
      label: "Maximum Load Capacity",
      value: "2 Ton/2000kg",
    },
    {
      label: "Make and Model",
      value: "22L x 7.5W x 7H",
    },
  ],
};
