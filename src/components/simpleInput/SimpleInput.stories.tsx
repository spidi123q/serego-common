import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import SimpleInput, { ISimpleInputProps } from "./SimpleInput";

export default {
  title: "Components/SimpleInput",
  component: SimpleInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleInputProps> = (args) => <SimpleInput {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
