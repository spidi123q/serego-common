import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SimpleThemeProvider } from "../SimpleThemeProvider";
import { ITabTimelineProps, TabTimeline } from "./TabTimeline";

export default {
  title: "Components/TabTimeline",
  component: TabTimeline,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ITabTimelineProps> = (args) => (
  <div style={{ margin: "2rem" }}>
    <SimpleThemeProvider>
      <TabTimeline {...args} />
    </SimpleThemeProvider>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      title: "Origin Details",
      subTitle: "Enter the origin details",
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
      title: "Destination Details",
      subTitle: "Enter the destination details",
      content: (
        <div>
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It
        </div>
      ),
    },
    {
      title: "Consignment Details",
      subTitle: "Enter the consignment details",
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
    {
      title: "Review",
      subTitle: "Let's confirm it!",
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
