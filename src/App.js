import React from "react";
import "./App.css";
import ToolButton from "./Tools/ToolButton";
import * as MUIIcon from "@material-ui/icons";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    toolButton1: {
      top: 50,
      left: 500,
      color: "white",
      background: "blue",
      "&:hover": {
        background: "lightcoral"
      }
    },
    toolButton2: {
      top: 300,
      left: 500
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div style={{ width: 100, height: 3000, background: "lightcoral" }} />
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
