import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolsPanel from "../ToolsPanel/ToolsPanel";

describe("Test Tools Panel", () => {
  test("Render", () => {
    render(<ToolsPanel onClose={() => {}} open={true} />);
  });

  test("Contains close button", () => {
    const toolsPanel = render(<ToolsPanel onClose={() => {}} open={true} />);
    expect(toolsPanel.getByTestId("close-button")).toBeVisible();
  });

  test("Contains drag indicator", () => {
    const toolsPanel = render(<ToolsPanel onClose={() => {}} open={true} />);
    expect(toolsPanel.getByTestId("drag-indicator")).toBeVisible();
  });

  test("Contains children", () => {
    const toolsPanel = render(
      <ToolsPanel onClose={() => {}} open={true}>
        Hello World
      </ToolsPanel>
    );
    expect(toolsPanel.getByText("Hello World")).toBeVisible();
  });

  test("Contains children", () => {
    const onClose = jest.fn();
    const toolsPanel = render(
      <ToolsPanel onClose={onClose} open={true}>
        Hello World
      </ToolsPanel>
    );
    fireEvent.click(toolsPanel.getByTestId("close-button"));
    expect(onClose).toBeCalled();
  });
});
