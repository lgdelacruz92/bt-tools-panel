import React from "react";
import "./App.css";
import ToolButton from "./Tools/ToolButton";
import * as MUIIcon from "@material-ui/icons";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    toolButton1: {
      transform: "translate(500px, 500px)"
    },
    toolButton2: {
      transform: "translate(500px, 100px)"
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ToolButton
        className={classes.toolButton1}
        icon={<MUIIcon.AcUnit />}
        panelPosition="left"
      >
        <div style={{ width: 100, height: 100, background: "red" }}></div>
        <div style={{ width: 200, height: 100, background: "blue" }}></div>
        <div style={{ width: 100, height: 200, background: "green" }}></div>
      </ToolButton>

      <ToolButton
        className={classes.toolButton2}
        icon={<MUIIcon.AcUnit />}
        panelPosition="right"
      >
        <div style={{ width: 100, height: 100, background: "red" }}></div>
        <div style={{ width: 200, height: 100, background: "blue" }}></div>
        <div style={{ width: 100, height: 200, background: "green" }}></div>
      </ToolButton>
    </div>
  );
}

export default App;
