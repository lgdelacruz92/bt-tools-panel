import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolsPanel from "../ToolsPanel/ToolsPanel";

describe("Test Tools Panel", () => {
  test("Render", () => {
    render(<ToolsPanel />);
  });

  test("Contains exit button", () => {
    const toolsPanel = render(<ToolsPanel />);
    expect(toolsPanel.getByTestId("exit-button")).toBeVisible();
  });
});
