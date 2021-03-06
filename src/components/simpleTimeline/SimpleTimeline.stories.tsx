import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { ISimpleTimelineProps, SimpleTimeline } from "./SimpleTimeline";

export default {
  title: "Components/Timeline",
  component: SimpleTimeline,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleTimelineProps> = (args) => (
  <StoryBookTemplate>
    <SimpleTimeline {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      label: "Origin Details",
      title: "Delivery Status",
      status: "completed",
      content: (
        <div>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It
        </div>
      ),
    },
    {
      label: "Destination Details",
      title: "Payment Status",
      status: "progress",
      content: (
        <div>
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
        </div>
      ),
    },
    {
      label: "Consignment Details",
      content: (
        <div>
          tting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It
        </div>
      ),
    },
  ],
};
