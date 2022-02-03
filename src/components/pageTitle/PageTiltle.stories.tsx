import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IPageTitleProps, PageTitle } from "./PageTitle";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/PageTitle",
  component: PageTitle,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IPageTitleProps> = (args) => (
  <StoryBookTemplate>
    <PageTitle {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  title: "Book a Truck",
  showCancel: true,
};
