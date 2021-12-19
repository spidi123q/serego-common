import "./Loader.scss";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

interface IProps {
  type: "brand";
  logo: string;
}

const Loader = (props: IProps) => {
  const { type, logo } = props;
  return (
    <div className="loader">
      {(() => {
        switch (type) {
          case "brand":
            return (
              <div className="loader__brand">
                <img className="loader__brandLogo" alt="logo" src={logo} />
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
