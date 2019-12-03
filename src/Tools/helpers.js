const setPanelPosLeft = (panelRect, buttonRect, margin) => {
  const centerY = (buttonRect.y * 2 + buttonRect.height) / 2;
  const panelX = buttonRect.x - (panelRect.width + margin);
  const panelY = centerY - panelRect.height / 2;
  return { x: panelX, y: panelY };
};

export const setPanelPosition = (panelRect, buttonRect, panelPos) => {
  const MARGIN = 20;
  if (panelPos === "left") {
    return setPanelPosLeft(panelRect, buttonRect, MARGIN);
  } else if (panelPos === "right") {
  } else if (panelPos === "bottom") {
  } else if (panelPos === "top") {
  } else {
    throw Error(`${panelPos} is not a valid position.`);
  }
};
