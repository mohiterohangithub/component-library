import logo from './logo.svg';
import './App.css';
import Tooltip from './conponents/Tooltip';

function App() {
  return (
    <div className="App">
      <Tooltip title= "Hello" > 
        <div style={{width:"100px", height:"100px", backgroundColor:"lightgrey" }} ></div>
      </Tooltip>
    </div>
  );
}

export default App;
