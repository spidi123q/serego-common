import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { InitialPaginateResult } from "../../models/PaginateResult";
import { StoryBookTemplate } from "../StoryBookTemplate";
import { ISimpleTableProps, SimpleTable } from "./SimpleTable";

export default {
  title: "Components/Table",
  component: SimpleTable,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISimpleTableProps> = (args) => (
  <div style={{ margin: "1rem" }}>
    <StoryBookTemplate>
      <SimpleTable {...args} />
    </StoryBookTemplate>
  </div>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});

Primary.args = {
  columns: [
    {
      headerName: "Dessert",
      field: "dessert",
    },
    {
      headerName: "Calories",
      field: "calories",
    },
    {
      headerName: "Fat",
      field: "fat",
    },
    {
      headerName: "Carbs",
      field: "carbs",
    },
  ],
  rows: [
    {
      dessert: "Frozen yoghurt",
      calories: "232",
      fat: "12",
      carbs: "313",
    },
    {
      dessert: "Ice cream sandwich",
      calories: "234",
      fat: "3",
      carbs: "423",
    },
    {
      dessert: "Eclair",
      calories: "42",
      fat: "42",
      carbs: "313",
    },
    {
      dessert: "Cupcake	",
      calories: "34",
      fat: "546",
      carbs: "54",
    },
  ],
  paginateResult: {
    ...InitialPaginateResult,
    totalDocs: 50,
  },
};
