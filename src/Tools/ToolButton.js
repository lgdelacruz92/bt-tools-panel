import React from "react";
import PropTypes from "prop-types";
import * as MUI from "@material-ui/core";
import ToolsPanel from "./ToolsPanel";

const useStyles = MUI.makeStyles(theme => {
  return {
    toolsPanel: {
      position: "absolute",
      left: 0,
      top: 0
    }
  };
});

const ToolButton = props => {
  const { icon, id, className, style, panelPosition } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef();
  return (
    <React.Fragment>
      <div id="container">
        <MUI.Fab
          className={className}
          style={style}
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
