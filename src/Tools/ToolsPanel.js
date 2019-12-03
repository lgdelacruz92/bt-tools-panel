import React from "react";
import * as MUI from "@material-ui/core";
import { Clear as Close, DragIndicator } from "@material-ui/icons";
import Draggable from "react-draggable";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = MUI.makeStyles(theme => {
  return {
    toolsPanel: {
      display: "inline-block",
      position: "absolute"
    },
    topControls: {
      display: "flex",
      justifyContent: "space-between",
      "&:hover": {
        cursor: "move"
      }
    },
    closeButton: {
      "&:hover": {
        cursor: "default"
      }
    }
  };
});

const ToolsPanel = props => {
  const classes = useStyles();
  const { onClose, id, className, style, open } = props;
  return (
    <div hidden={!open}>
      <Draggable cancel="#tools-panel-content">
        <MUI.Paper
          id={id}
          className={clsx(classes.toolsPanel, className)}
          style={style}
        >
          <div className={classes.topControls}>
            <DragIndicator data-testid="drag-indicator" />
            <Close
              data-testid="close-button"
              className={classes.closeButton}
              onClick={onClose}
            />
          </div>
          <div>
            <div id="tools-panel-content">{props.children}</div>
          </div>
        </MUI.Paper>
      </Draggable>
    </div>
  );
};

ToolsPanel.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default ToolsPanel;
