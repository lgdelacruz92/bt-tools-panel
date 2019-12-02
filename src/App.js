import React from "react";
import "./App.css";
import ToolsPanel from "./ToolsPanel/ToolsPanel";

function App() {
  return (
    <div className="App">
      <button onClick={() => {}}>Click</button>
      <ToolsPanel>
        <div>Hello World</div>
      </ToolsPanel>
    </div>
  );
}

export default App;
