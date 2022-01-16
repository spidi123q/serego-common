import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { ISimpleDropzoneProps, SimpleDropzone } from "./SimpleDropzone";

export default {
  title: "Components/Dropzone",
  component: SimpleDropzone,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleDropzoneProps> = (args) => (
  <StoryBookTemplate>
    <SimpleDropzone {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});

Primary.args = {
  url: "brand",
  onChange: (files) => {
    console.log(
      "🚀 ~ file: SimpleDropzone.stories.tsx ~ line 24 ~ files",
      files
    );
  },
};
