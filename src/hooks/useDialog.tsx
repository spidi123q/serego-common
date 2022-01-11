import React, { useState } from "react";
import { SlideUpTransition } from "../components/Transitions";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";

export default function useDialog(isFullScreen?: boolean) {
  const theme = useTheme();
  const isXsDown = isFullScreen ?? useMediaQuery(theme.breakpoints.down("xs"));
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [component, setComponent] = useState<JSX.Element>();
  const open = (component: JSX.Element) => {
    setComponent(component);
    setIsFormOpen(true);
  };
  const close = () => {
    setComponent(undefined);
    setIsFormOpen(false);
  };
  const PopUp = () => (
    <Dialog
      fullScreen={isXsDown}
      scroll="paper"
      open={isFormOpen}
      onClose={close}
      TransitionComponent={SlideUpTransition}
    >
      {component}
    </Dialog>
  );

  return {
    open,
    close,
    PopUp,
  };
}
