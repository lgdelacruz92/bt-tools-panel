import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ToolButton from "../Tools/ToolButton";
import * as MUIIcon from "@material-ui/icons";

describe("Test Tools Panel", () => {
  test("render tool button", () => {
    renderDefault({ icon: <MUIIcon.AcUnit /> });
  });

  const renderDefault = props => {
    return render(<ToolButton {...props} />);
  };
});
