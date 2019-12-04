import React from 'react';
import { makeStyles, Paper, Fab } from '@material-ui/core';
import { DragIndicator, Clear } from '@material-ui/icons';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

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

var validateRef = function validateRef(ref) {
  return ref && ref.current;
};

var clamp = function clamp(y, min, max) {
  if (y <= min) {
    return min;
  } else if (y >= max) {
    return max - 20;
  } else {
    return y;
  }
};

var getPanelPosYLeftRight = function getPanelPosYLeftRight(panelRect, buttonRect) {
  var centerY = (buttonRect.y * 2 + buttonRect.height) / 2;
  var panelY = clamp(centerY - panelRect.height / 2, 0, window.innerHeight);
  return panelY;
};

var getPanelPosLeft = function getPanelPosLeft(panelRect, buttonRect, margin) {
  var panelX = buttonRect.x - (panelRect.width + margin);
  var panelY = getPanelPosYLeftRight(panelRect, buttonRect);
  return {
    x: panelX,
    y: panelY
  };
};

var getPanelPosRight = function getPanelPosRight(panelRect, buttonRect, margin) {
  var panelX = buttonRect.x + buttonRect.width + margin;
  var panelY = getPanelPosYLeftRight(panelRect, buttonRect);
  return {
    x: panelX,
    y: panelY
  };
};

var getPanelPos = function getPanelPos(panelRect, buttonRect, panelPos) {
  var MARGIN = 20;

  if (panelPos === "left") {
    return getPanelPosLeft(panelRect, buttonRect, MARGIN);
  } else if (panelPos === "right") {
    return getPanelPosRight(panelRect, buttonRect, MARGIN);
  } else if (panelPos === "bottom") ; else if (panelPos === "top") ; else {
    throw Error("".concat(panelPos, " is not a valid position."));
  }
};

var useStyles = makeStyles(function (theme) {
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

var ToolsPanel = function ToolsPanel(props) {
  var _clsx;

  var onClose = props.onClose,
      id = props.id,
      className = props.className,
      style = props.style,
      open = props.open,
      buttonRef = props.buttonRef,
      panelPosition = props.panelPosition;
  var classes = useStyles();
  var paperRef = React.useRef();

  var _React$useState = React.useState({
    x: 0,
    y: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      defaultDrPosition = _React$useState2[0],
      setDefaultDrPosition = _React$useState2[1];

  React.useEffect(function () {
    if (validateRef(buttonRef) && validateRef(paperRef)) {
      var buttonRect = buttonRef.current.getBoundingClientRect();
      var panelRect = paperRef.current.getBoundingClientRect();
      var drPos = getPanelPos(panelRect, buttonRect, panelPosition);
      setDefaultDrPosition(drPos);
    }
  }, [buttonRef, panelPosition]);
  return React.createElement("div", {
    className: clsx(classes.container, (_clsx = {}, _defineProperty(_clsx, classes.hidden, !open), _defineProperty(_clsx, classes.shown, open), _clsx))
  }, React.createElement(Draggable, {
    position: defaultDrPosition,
    onStop: function onStop(e, data) {
      setDefaultDrPosition({
        x: data.x,
        y: data.y
      });
    },
    cancel: "#tools-panel-content"
  }, React.createElement(Paper, {
    id: id,
    ref: paperRef,
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

var useStyles$1 = makeStyles(function (theme) {
  return {
    toolsPanel: {
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 1
    }
  };
});

var ToolButton = function ToolButton(props) {
  var icon = props.icon,
      id = props.id,
      className = props.className,
      style = props.style,
      panelPosition = props.panelPosition,
      position = props.position;

  if (position !== "absolute" && position !== "fixed") {
    throw Error("position must be either absolute or fixed");
  }

  if (panelPosition !== "left" && panelPosition !== "right") {
    throw Error("panelPosition must not either left or right");
  }

  var classes = useStyles$1();

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var buttonRef = React.useRef();
  return React.createElement(React.Fragment, null, React.createElement("div", null, React.createElement(Fab, {
    className: className,
    style: _objectSpread2({}, style, {}, {
      position: position || "fixed"
    }, {
      zIndex: 0
    }),
    onClick: function onClick() {
      return setOpen(true);
    },
    id: id,
    ref: buttonRef
  }, icon), React.createElement("div", {
    className: classes.toolsPanel
  }, React.createElement(ToolsPanel, {
    buttonRef: buttonRef,
    id: "".concat(id, "-panel"),
    onClose: function onClose() {
      return setOpen(false);
    },
    open: open,
    panelPosition: panelPosition
  }, props.children))));
};

ToolButton.propTypes = {
  icon: PropTypes.element.isRequired,
  panelPosition: PropTypes.string.isRequired
};

export default ToolButton;
export { ToolsPanel };
