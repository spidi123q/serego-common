import "./Loader.scss";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export interface ILoaderProps {
  type: "brand";
  image: string;
}

const Loader = (props: ILoaderProps) => {
  const { type, image } = props;
  return (
    <div className="loader">
      {(() => {
        switch (type) {
          case "brand":
            return (
              <div className="loader__brand">
                <img className="loader__brandImage" alt="image" src={image} />
                <CircularProgress
                  color="primary"
                  thickness={5}
                  size={32}
                  className="loader__brandCircularProgress"
                />
              </div>
            );
        }
      })()}
    </div>
  );
};

export default Loader;
