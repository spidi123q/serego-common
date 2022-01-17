import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { SimpleCard, ISimpleCardProps } from "./SimpleCard";

export default {
  title: "Components/Card",
  component: SimpleCard,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleCardProps> = (args) => (
  <StoryBookTemplate>
    <SimpleCard {...args}>
      <div>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It
      </div>
      <div>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It
      </div>
      <div>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It
      </div>
      <div>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        It
      </div>
    </SimpleCard>
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
