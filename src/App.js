import styled from "styled-components";
import "./App.css";
import Tooltip from "./conponents/Tooltip";
import Slider from "./conponents/Slider";
import Poper from "./conponents/Poper";
import TimePickerDigital from "./conponents/timepicker/TimePickerDigital";
const arr = [
  1, 2, 3, 4, 5, 7, 8, 5, 6, 4, 2, 8, 2, 10, 78, 54, 63, 47, 2236, 45,
];
function App() {
  return (
    <div className="App">
      <TimePickerDigital/>
    </div>
  );
}

export default App;
