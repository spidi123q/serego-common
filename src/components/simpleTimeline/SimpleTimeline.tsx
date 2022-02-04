import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import classNames from "classnames";
import React from "react";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./SimpleTimeline.scss";
import DoneIcon from "@mui/icons-material/Done";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { IconNames } from "../..";

export interface ISimpleTimelineProps {
  items: ITimelineItem[];
}

export const SimpleTimeline: React.FunctionComponent<ISimpleTimelineProps> = (
  props
) => {
  const { items } = props;
  return (
    <Timeline className="simple-timeline">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              className={classNames({
                [`simple-timeline__dot--${item.status}`]: item.status,
              })}
            >
              {item.status === "completed" ? (
                <SimpleIcon size="sm" name={IconNames.check} />
              ) : (
                index + 1
              )}
            </TimelineDot>
            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <div className="simple-timeline__item">
              <SimpleTypography color="primaryColor" family="medium">
                {item.title}
              </SimpleTypography>
              <div className="simple-timeline__item-content">
                {item.content}
              </div>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export interface ITimelineItem {
  title?: string;
  content?: string | number | JSX.Element;
  status?: "completed" | "progress";
}
