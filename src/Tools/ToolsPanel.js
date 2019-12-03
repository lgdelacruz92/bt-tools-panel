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
  const paperRef = React.useRef();

  const [defaultDrPosition, setDefaultDrPosition] = React.useState({
    x: 0,
    y: 0
  });

  React.useEffect(() => {
    if (validateRef(buttonRef) && validateRef(paperRef)) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const panelRect = paperRef.current.getBoundingClientRect();
      const drPos = setPanelPosition(panelRect, buttonRect, panelPosition);
      setDefaultDrPosition(drPos);
    }
  }, []);
  return (
    <div
      className={clsx(classes.container, {
        [classes.hidden]: !open,
        [classes.shown]: open
      })}
    >
      <Draggable
        position={defaultDrPosition}
        onStop={(e, data) => {
          setDefaultDrPosition({ x: data.x, y: data.y });
        }}
        cancel="#tools-panel-content"
      >
        <MUI.Paper
          id={id}
          ref={paperRef}
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
