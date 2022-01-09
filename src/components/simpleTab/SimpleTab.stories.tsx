import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { SimpleThemeProvider } from "../SimpleThemeProvider";
import { SimpleTab, ISimpleTabProps } from "./SimpleTab";

export default {
  title: "Components/Tab",
  component: SimpleTab,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleTabProps> = (args) => (
  <div style={{ margin: "2rem" }}>
    <SimpleThemeProvider>
      <SimpleTab {...args} />
    </SimpleThemeProvider>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  tabs: [
    {
      title: "Origin Details",
      content: (
        <div>
          Origin Details is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It
        </div>
      ),
    },
    {
      title: "Destination Details",
      content: (
        <div>
          Destinationunknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It
        </div>
      ),
    },
    {
      title: "Consignment Details",
      content: (
        <div>
          Consignment tting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It
        </div>
      ),
    },
    {
      title: "Review",
      content: (
        <div>
          Review tting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It
        </div>
      ),
    },
  ],
};
