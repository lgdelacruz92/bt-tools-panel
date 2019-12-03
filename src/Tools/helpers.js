export const setPanelPosition = (panel, buttonRect, panelPos) => {
  if (panelPos === "left") {
  } else if (panelPos === "right") {
  } else if (panelPos === "bottom") {
  } else if (panelPos === "top") {
  } else {
    throw Error(`${panelPos} is not a valid position.`);
  }
};
