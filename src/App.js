import styled from "styled-components";
import "./App.css";
import Tooltip from "./conponents/Tooltip";
import Slider from "./conponents/Slider";
const arr = [
  1, 2, 3, 4, 5, 7, 8, 5, 6, 4, 2, 8, 2, 10, 78, 54, 63, 47, 2236, 45,
];
function App() {
  return (
    <div className="App">
      {/* <Tooltip title="Hello">
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: "lightgrey",
            position: "absolute",
            right: "50%",
            bottom: "30%",
          }}
        ></div>
      </Tooltip> */}
      <Slider>
        {arr.map((cnt, ind) => (
          <Tooltip  title={ind} >
            <Child style={{ width: ind === 10 ? "200px" : "80px" }} key={ind}>
              {ind}
            </Child>
          </Tooltip>
        ))}
      </Slider>
    </div>
  );
}

const Child = styled.div`
  width: 80px;
  flex: 1;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid red;
`;

export default App;
