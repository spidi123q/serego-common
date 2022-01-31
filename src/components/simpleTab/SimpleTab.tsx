import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import React from "react";
import "./SimpleTab.scss";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";

export interface ISimpleTabProps {
  tabs: ISimpleTabItem[];
  activeTab?: string | null;
}

export const SimpleTab: React.FunctionComponent<ISimpleTabProps> = (props) => {
  const { tabs, activeTab } = props;
  const [value, setValue] = React.useState<string>(activeTab ?? "0");

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <div className="simple-tab">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {tabs.map((tab, index) => (
              <Tab
                key={tab.title}
                label={<SimpleTypography>{tab.title}</SimpleTypography>}
                value={index.toString()}
              />
            ))}
          </TabList>
        </Box>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={index.toString()}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </div>
  );
};

export interface ISimpleTabItem {
  title: string;
  content: string | number | JSX.Element;
}
