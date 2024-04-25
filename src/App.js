
import "./App.css";
import Tooltip from "./conponents/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip title="Hello">
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightgrey",
            position: "absolute",
            right: "5%",
            bottom: "30%",
          }}
        ></div>
      </Tooltip>
    </div>
  );
}

export default App;
