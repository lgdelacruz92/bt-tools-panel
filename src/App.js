import React from "react";
import "./App.css";
import ToolButton from "./Tools/ToolButton";
import * as MUIIcon from "@material-ui/icons";

function App() {
  return (
    <div className="App">
      <ToolButton icon={<MUIIcon.AcUnit />}>Hello World </ToolButton>
    </div>
  );
}

export default App;
