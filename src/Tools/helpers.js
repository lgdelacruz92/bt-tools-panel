const clamp = (y, min, max) => {
  if (y <= min) {
    return min;
  } else if (y >= max) {
    return max - 20;
  } else {
    return y;
  }
};

const getPanelPosYLeftRight = (panelRect, buttonRect) => {
  const centerY = (buttonRect.y * 2 + buttonRect.height) / 2;
  const panelY = clamp(centerY - panelRect.height / 2, 0, window.innerHeight);
  return panelY;
};

const getPanelPosLeft = (panelRect, buttonRect, margin) => {
  const panelX = buttonRect.x - (panelRect.width + margin);
  const panelY = getPanelPosYLeftRight(panelRect, buttonRect);
  return { x: panelX, y: panelY };
};

const getPanelPosRight = (panelRect, buttonRect, margin) => {
  const panelX = buttonRect.x + buttonRect.width + margin;
  const panelY = getPanelPosYLeftRight(panelRect, buttonRect);
  return { x: panelX, y: panelY };
};

export const getPanelPos = (panelRect, buttonRect, panelPos) => {
  const MARGIN = 20;
  if (panelPos === "left") {
    return getPanelPosLeft(panelRect, buttonRect, MARGIN);
  } else if (panelPos === "right") {
    return getPanelPosRight(panelRect, buttonRect, MARGIN);
  } else if (panelPos === "bottom") {
  } else if (panelPos === "top") {
  } else {
    throw Error(`${panelPos} is not a valid position.`);
  }
};
