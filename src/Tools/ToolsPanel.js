import React from "react";
import * as MUI from "@material-ui/core";
import { Clear as Close, DragIndicator } from "@material-ui/icons";
import Draggable from "react-draggable";
import PropTypes from "prop-types";
import clsx from "clsx";
import { validateRef } from "./utils";
import { setPanelPosition } from "./helpers";

const useStyles = MUI.makeStyles(theme => {
  return {
    container: {
      transition: "visibility 0s, opacity 0.5s ease-out"
    },
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
    },
    hidden: {
      opacity: 0,
      visibility: "hidden"
    },
    shown: {
      opacity: 1,
      visibility: "visible"
    }
  };
});

const ToolsPanel = props => {
  const {
    onClose,
    id,
    className,
    style,
    open,
    buttonRef,
    panelPosition
  } = props;
  const classes = useStyles();
  const containerRef = React.useRef();

  React.useEffect(() => {
    if (validateRef(buttonRef) && validateRef(containerRef)) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setPanelPosition(containerRef.current, buttonRect, panelPosition);
    }
  });
  return (
    <div
      ref={containerRef}
      className={clsx(classes.container, {
        [classes.hidden]: !open,
        [classes.shown]: open
      })}
    >
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
