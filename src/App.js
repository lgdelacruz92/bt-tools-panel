import React from "react";
import "./App.css";
import ToolsPanel from "bt-tools-panel";

function App() {
  return (
    <div className="App">
      <button onClick={() => {}}>Click</button>
      <ToolsPanel onClose={() => {}} open={true}>
        <div>Hello World</div>
      </ToolsPanel>
    </div>
  );
}

export default App;
