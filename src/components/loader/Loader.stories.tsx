import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import Loader, { ILoaderProps } from "./Loader";
import { SimpleThemeProvider } from "../SimpleThemeProvider";

export default {
  title: "Components/Loader",
  component: Loader,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ILoaderProps> = (args) => (
  <SimpleThemeProvider>
    <Loader {...args} />
  </SimpleThemeProvider>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  type: "brand",
};
