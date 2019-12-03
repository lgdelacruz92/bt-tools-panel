import React from 'react';
import { makeStyles, Paper, Fab } from '@material-ui/core';
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var ToolButton = function ToolButton(props) {
  var icon = props.icon,
      id = props.id,
      className = props.className,
      style = props.style;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  return React.createElement(React.Fragment, null, React.createElement(Fab, {
    className: className,
    style: style,
    onClick: function onClick() {
      return setOpen(true);
    },
    id: id
  }, icon), React.createElement(ToolsPanel, {
    id: "".concat(id, "-panel"),
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open
  }, props.children));
};

ToolButton.propTypes = {
  icon: PropTypes.element.isRequired
};

export default ToolButton;
export { ToolsPanel };
