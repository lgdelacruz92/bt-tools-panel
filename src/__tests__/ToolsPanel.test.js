import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolsPanel from "../ToolsPanel/ToolsPanel";

describe("Test Tools Panel", () => {
  test("Render", () => {
    render(<ToolsPanel />);
  });
});
