import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { FormSummary, IFormSummaryProps } from "./FormSummary";

export default {
  title: "Components/FormSummary",
  component: FormSummary,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IFormSummaryProps> = (args) => (
  <StoryBookTemplate>
    <FormSummary {...args} />
  </StoryBookTemplate>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
export const labelMap = new Map();
labelMap.set("truckType", "Select truck type");
labelMap.set("pickupAddress", "Pickup Location");
labelMap.set("destinationAddress", "Destination Location");

Primary.args = {
  title: "Consignment Details",
  values: {
    truckType: "Small",
    pickupAddress: "Jebel Ali, Dubai",
    destinationAddress: "Mina Zayed, Abu Dhabi",
  },
  labelMap,
};
