import React from "react";
import * as MUI from "@material-ui/core";
import { Clear as Close } from "@material-ui/icons";

const ToolsPanel = props => {
  return (
    <MUI.Card>
      <Close data-testid="exit-button"></Close>
    </MUI.Card>
  );
};

export default ToolsPanel;
