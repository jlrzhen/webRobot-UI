import { useState } from 'react';
// import Joystick from './components/Joystick'
import Dpad from './components/Dpad'
import './App.css';

/* TODO
  - add turn lights
  - add forklift arm
  - add ramp
*/

function App() {
  const [address, setAddress] = useState();
  const [url, setUrl] = useState();
  
  const handleSubmit = () => {
    setAddress(document.getElementById("addressInput").value);
    setUrl(`http://${document.getElementById("addressInput").value}:5000/`);
    document.getElementById("addressInput").value = "";
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <p>{address}</p>
        <input id="addressInput"></input>
        <button onClick={handleSubmit}>Set</button>
        <Dpad url={url}/>
        {/* <Joystick/> */}
      </header>
    </div>
  );
}

export default App;
