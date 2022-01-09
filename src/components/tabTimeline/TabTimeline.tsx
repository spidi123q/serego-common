import "./TabTimeline.scss";
import React, { useState } from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import classNames from "classnames";

export interface ITabTimelineProps {
  tabs: ITabItem[];
  activeTabIndex?: number;
}

export const TabTimeline: React.FunctionComponent<ITabTimelineProps> = (
  props
) => {
  const { tabs } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    props.activeTabIndex ?? 0
  );

  return (
    <div className="tab-timeline">
      <div className="tab-timeline__header">
        {tabs.map((tab, index) => (
          <div className="tab-timeline__header-item">
            <div className="tab-timeline__header-title">
              <span
                className={classNames("tab-timeline__header-title-index", {
                  "tab-timeline__header-title-index--active":
                    activeTabIndex === index,
                })}
              >
                {index + 1}
              </span>
              <span>
                <SimpleTypography
                  family="medium"
                  variant="subtitle1"
                  color={activeTabIndex === index ? "colorBlack" : "colorDark"}
                >
                  {tab.title}
                </SimpleTypography>
                <SimpleTypography
                  variant="subtitle2"
                  color={
                    activeTabIndex === index ? "colorDark" : "colorDarkLight3"
                  }
                >
                  {tab.subTitle}
                </SimpleTypography>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="tab-timeline__body"></div>
    </div>
  );
};

export interface ITabItem {
  title: string;
  subTitle: string;
  content: string | number | JSX.Element;
}
