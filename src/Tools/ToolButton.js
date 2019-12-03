import React from "react";
import PropTypes from "prop-types";
import * as MUI from "@material-ui/core";
import ToolsPanel from "./ToolsPanel";

const ToolButton = props => {
  const { icon, id, className, style } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <MUI.Fab
        className={className}
        style={style}
        onClick={() => setOpen(true)}
        id={id}
      >
        {icon}
      </MUI.Fab>
      <ToolsPanel id={`${id}-panel`} onClose={() => setOpen(false)} open={open}>
        {props.children}
      </ToolsPanel>
    </React.Fragment>
  );
};

ToolButton.propTypes = {
  icon: PropTypes.element.isRequired
};

export default ToolButton;
