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
  const { icon, id, className, style } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div id="container">
        <MUI.Fab
          className={className}
          style={style}
          onClick={() => setOpen(true)}
          id={id}
        >
          {icon}
        </MUI.Fab>
        <div className={classes.toolsPanel}>
          <ToolsPanel
            id={`${id}-panel`}
            onClose={() => setOpen(false)}
            open={open}
          >
            {props.children}
          </ToolsPanel>
        </div>
      </div>
    </React.Fragment>
  );
};

ToolButton.propTypes = {
  icon: PropTypes.element.isRequired
};

export default ToolButton;
