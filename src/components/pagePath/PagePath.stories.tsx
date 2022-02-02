import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { IPagePathProps, PagePath } from "./PagePath";
import { StoryBookTemplate } from "../StoryBookTemplate";

export default {
  title: "Components/PagePath",
  component: PagePath,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IPagePathProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <PagePath {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  labels: ["My Shipments", "Ongoing Clearance", "Shipment ID: 425112"],
};
