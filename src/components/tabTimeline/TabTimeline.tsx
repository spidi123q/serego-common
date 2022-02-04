import "./TabTimeline.scss";
import React, { useState } from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import classNames from "classnames";
import { SimpleButton } from "../..";

export interface ITabTimelineProps {
  tabs: ITabTimelineItem[];
  activeTabIndex?: number;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
  disableNextOnIncomplete?: boolean;
}

export const TabTimeline: React.FunctionComponent<ITabTimelineProps> = (
  props
) => {
  const { tabs, onSubmit, disableNextOnIncomplete } = props;
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    props.activeTabIndex ?? 0
  );

  const onNext = () => {
    setActiveTabIndex(activeTabIndex + 1);
  };

  const onBack = () => {
    setActiveTabIndex(activeTabIndex - 1);
  };

  return (
    <div className="tab-timeline">
      <div className="tab-timeline__header">
        {tabs.map((tab, index) => (
          <div className="tab-timeline__header-item" key={index}>
            <div className="tab-timeline__header-title">
              <span
                className={classNames("tab-timeline__header-title-index", {
                  [`tab-timeline__header-title-index--${tab.status}`]:
                    tab.status,
                })}
              >
                {index + 1}
              </span>
              <span>
                <SimpleTypography
                  family="medium"
                  variant="subtitle1"
                  color={
                    activeTabIndex === index || tab.status === "completed"
                      ? "colorBlack"
                      : "colorDark"
                  }
                >
                  {tab.title}
                </SimpleTypography>
                <SimpleTypography
                  variant="subtitle2"
                  color={
                    activeTabIndex === index || tab.status === "completed"
                      ? "colorDark"
                      : "colorDarkLight3"
                  }
                >
                  {tab.subTitle}
                </SimpleTypography>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="tab-timeline__body">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={classNames("tab-timeline__body-content", {
              "tab-timeline__body-content--active": activeTabIndex === index,
            })}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <div className="tab-timeline__actions">
        {activeTabIndex > 0 && (
          <SimpleButton onClick={onBack} variant="outlined" marginRight>
            Back
          </SimpleButton>
        )}
        {activeTabIndex + 1 < tabs.length && (
          <SimpleButton
            onClick={onNext}
            disabled={
              disableNextOnIncomplete &&
              !(tabs[activeTabIndex].status === "completed")
            }
          >
            Next
          </SimpleButton>
        )}
        {activeTabIndex + 1 == tabs.length && (
          <SimpleButton onClick={onSubmit}>Submit</SimpleButton>
        )}
      </div>
    </div>
  );
};

export interface ITabTimelineItem {
  title: string;
  subTitle: string;
  content: string | number | JSX.Element;
  status?: "completed" | "progress";
}
