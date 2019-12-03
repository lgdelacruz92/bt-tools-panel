import React from "react";
import "./App.css";
import ToolsPanel from "./ToolsPanel/ToolsPanel";
import * as MUI from "@material-ui/core";
import * as MUIIcons from "@material-ui/icons";

const useStyles = MUI.makeStyles(theme => {
  return {
    fab: {
      position: "absolute",
      top: 100,
      left: 100
    }
  };
});

function App() {
  return <div className="App"></div>;
}

export default App;
