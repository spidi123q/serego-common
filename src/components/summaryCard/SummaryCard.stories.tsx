import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ISummaryCardProps, SummaryCard } from "./SummaryCard";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { IconNames } from "../simpleIcon/helper";

export default {
  title: "Components/SummaryCard",
  component: SummaryCard,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISummaryCardProps> = (args) => (
  <div style={{ width: "20rem" }}>
    <StoryBookTemplate>
      <SummaryCard {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  iconName: IconNames.package,
  title: "12",
  subTitle: "Shipmets",
};
