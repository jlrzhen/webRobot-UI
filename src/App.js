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
    setUrl(`https://${document.getElementById("addressInput").value}:5000/`);
    document.getElementById("addressInput").value = "";
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <p><a 
          href={`https://${address}:5000`}
          rel="noreferrer" 
          target="_blank"
          style={{ color: 'white' }}
          >
            {address}
          </a></p>
        <input id="addressInput"></input>
        <button onClick={handleSubmit}>Set</button>
        <Dpad url={url}/>
        {/* <Joystick/> */}
      </header>
    </div>
  );
}

export default App;
