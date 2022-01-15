import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { ISimpleTypographyProps, SimpleTypography } from "./SimpleTypography";

export default {
  title: "Components/Typography",
  component: SimpleTypography,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleTypographyProps> = (args) => (
  <div>
    <StoryBookTemplate>
      <SimpleTypography variant="h1" {...args}>
        h1 Heading
      </SimpleTypography>
      <br />
      <SimpleTypography color="primaryColor" onClick={Promise.resolve}>
        h2 Heading
      </SimpleTypography>
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
