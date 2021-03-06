import React, { useRef, useState } from "react";
import { SlideUpTransition } from "../components/Transitions";
import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dialog from "@mui/material/Dialog";

export default function useDialog(
  isFullScreen?: boolean,
  maxWidth?: Breakpoint
) {
  const theme = useTheme();
  const isXsDown = isFullScreen ?? useMediaQuery(theme.breakpoints.down("md"));
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const componentRef = useRef<JSX.Element>();

  const open = (component: JSX.Element) => {
    componentRef.current = component;
    setIsFormOpen(true);
  };
  const close = () => {
    componentRef.current = undefined;
    setIsFormOpen(false);
  };
  const PopUp = () => (
    <Dialog
      fullScreen={isXsDown}
      scroll="paper"
      open={isFormOpen}
      onClose={close}
      TransitionComponent={SlideUpTransition}
      maxWidth={maxWidth}
      fullWidth
    >
      {componentRef.current}
    </Dialog>
  );

  return {
    open,
    close,
    PopUp,
  };
}
