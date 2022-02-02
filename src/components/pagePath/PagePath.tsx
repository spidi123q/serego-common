import IconButton from "@mui/material/IconButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconNames } from "../simpleIcon/helper";
import { SimpleIcon } from "../simpleIcon/SimpleIcon";
import { SimpleTypography } from "../simpleTypography/SimpleTypography";
import "./PagePath.scss";

export interface IPagePathProps {
  labels: string[];
}

export const PagePath: React.FunctionComponent<IPagePathProps> = (props) => {
  const { labels } = props;
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div className="page-path">
      <IconButton aria-label="back" onClick={goBack}>
        <SimpleIcon name={IconNames.back} />
      </IconButton>

      <div className="page-path__labels">
        {labels.map((label, index) => {
          const isLast = index === labels.length - 1;
          return (
            <SimpleTypography
              color={isLast ? "colorBlack" : "colorDark"}
              whiteSpace="pre"
              family={isLast ? "medium" : "regular"}
            >
              {isLast ? label : ` ${label} / `}
            </SimpleTypography>
          );
        })}
      </div>
    </div>
  );
};
