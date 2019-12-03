import React from "react";
import "./App.css";
import ToolButton from "./Tools/ToolButton";
import * as MUIIcon from "@material-ui/icons";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    toolButton: {
      transform: "translate(500px, 500px)"
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ToolButton className={classes.toolButton} icon={<MUIIcon.AcUnit />}>
        <div style={{ width: 100, height: 100, background: "red" }}></div>
      </ToolButton>
    </div>
  );
}

export default App;
