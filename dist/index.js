import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { DragIndicator, Clear } from '@material-ui/icons';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var useStyles = makeStyles(function (theme) {
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

var ToolsPanel = function ToolsPanel(props) {
  var classes = useStyles();
  var onClose = props.onClose,
      id = props.id,
      className = props.className,
      style = props.style,
      open = props.open;
  return React.createElement("div", {
    hidden: !open
  }, React.createElement(Draggable, {
    cancel: "#tools-panel-content"
  }, React.createElement(Paper, {
    id: id,
    className: clsx(classes.toolsPanel, className),
    style: style
  }, React.createElement("div", {
    className: classes.topControls
  }, React.createElement(DragIndicator, {
    "data-testid": "drag-indicator"
  }), React.createElement(Clear, {
    "data-testid": "close-button",
    className: classes.closeButton,
    onClick: onClose
  })), React.createElement("div", null, React.createElement("div", {
    id: "tools-panel-content"
  }, props.children)))));
};

ToolsPanel.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default ToolsPanel;
