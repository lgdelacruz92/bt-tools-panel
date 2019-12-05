import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolButton from "../Tools/ToolButton";
import * as MUIIcon from "@material-ui/icons";

describe("Test Tools Panel", () => {
  test("render tool button", () => {
    renderDefault({
      icon: <MUIIcon.AcUnit />,
      panelPosition: "left",
      position: "fixed"
    });
  });

  test("contains icon", () => {
    const toolButton = renderDefault({
      icon: <MUIIcon.AcUnit data-testid="icon" />,
      panelPosition: "left",
      position: "fixed"
    });
    expect(toolButton.getByTestId("icon")).toBeVisible();
  });

  test("contains icon", () => {
    const toolButtonId = "tool-button";
    const toolButton = renderDefault({
      id: toolButtonId,
      icon: <MUIIcon.AcUnit data-testid="icon" />,
      children: "hello",
      panelPosition: "left",
      position: "fixed"
    });
    fireEvent.click(toolButton.getByTestId("icon"));
    expect(document.getElementById(`${toolButtonId}-panel`)).toBeVisible();
    expect(toolButton.getByText("hello")).toBeVisible();
  });

  const renderDefault = props => {
    return render(<ToolButton {...props}>{props.children}</ToolButton>);
  };
});
