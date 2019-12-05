import React from "react";
import PropTypes from "prop-types";
import * as MUI from "@material-ui/core";
import ToolsPanel from "./ToolsPanel";

const useStyles = MUI.makeStyles(theme => {
  return {
    toolsPanel: {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 1
    }
  };
});

const ToolButton = props => {
  const { icon, id, className, style, panelPosition } = props;
  if (panelPosition !== "left" && panelPosition !== "right") {
    throw Error("panelPosition must not either left or right");
  }

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef();
  return (
    <React.Fragment>
      <div>
        <MUI.Fab
          className={className}
          style={{ ...style, ...{ position: "fixed" }, zIndex: 0 }}
          onClick={() => setOpen(true)}
          id={id}
          ref={buttonRef}
        >
          {icon}
        </MUI.Fab>
        <div className={classes.toolsPanel}>
          <ToolsPanel
            buttonRef={buttonRef}
            id={`${id}-panel`}
            onClose={() => setOpen(false)}
            open={open}
            panelPosition={panelPosition}
          >
            {props.children}
          </ToolsPanel>
        </div>
      </div>
    </React.Fragment>
  );
};

ToolButton.propTypes = {
  icon: PropTypes.element.isRequired,
  panelPosition: PropTypes.string.isRequired
};

export default ToolButton;
