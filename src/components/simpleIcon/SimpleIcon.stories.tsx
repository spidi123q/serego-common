import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { SimpleIcon, ISimpleIconProps } from "./SimpleIcon";
import { IconNames } from "./helper";

export default {
  title: "Components/Icon",
  component: SimpleIcon,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleIconProps> = (args) => (
  <div style={{ margin: "2rem" }}>
    <StoryBookTemplate>
      <SimpleIcon {...args} />
      <br />
      {Object.values(IconNames).map((iconName) => (
        <div>
          <SimpleIcon name={iconName} key={iconName} />
          {iconName}
          <br />
        </div>
      ))}
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
