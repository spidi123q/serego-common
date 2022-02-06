import React from "react";
import "./SkeletonPlaceholder.scss";
import Skeleton, { SkeletonTheme, SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface ISkeletonPlaceholderProps extends SkeletonProps {}

export const SkeletonPlaceholder: React.FunctionComponent<ISkeletonPlaceholderProps> =
  (props) => {
    return (
      <SkeletonTheme>
        <Skeleton
          {...props}
          containerClassName="skeleton-placeholder"
          className="skeleton-placeholder__item"
        />
      </SkeletonTheme>
    );
  };

SkeletonPlaceholder.defaultProps = {
  count: 5,
};
