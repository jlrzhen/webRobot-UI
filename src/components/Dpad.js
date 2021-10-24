import React, {useState} from 'react';
import './Dpad.css';
import sendCoords from '../Robot/RobotControl';

function Dpad(props) {
    const [speed/*,setSpeed*/] = useState(100);
    const [dpadX, setDpadX] = useState(0);
    const [dpadY, setDpadY] = useState(0);

    const handleF = () => {
        sendCoords(0,speed,true,props.url);
        setDpadY(100);
    }
    const handleB = () => {
        sendCoords(0,speed*-1,true,props.url);
        setDpadY(-100);
    }
    const handleL = () => {
        sendCoords(speed*-1,0,true,props.url);
        setDpadX(-100);
    }
    const handleR = () => {
        sendCoords(speed,0,true,props.url);
        setDpadX(100);
    }

    const handleMU = () => {
        sendCoords(0,0,false,props.url);
        setDpadY(0);
        setDpadX(0);
    }

    // const handleChange = () => {
    //     setSpeed(document.getElementById("speed").value)
    // }

    return (
    <div className="Component">
        <header className="Component-header">
            {/* <h2>{speed}</h2>
            <input type="range" id="speed" value={speed} onChange={handleChange}/>
            <br/> */}

        <span>{dpadX}</span>
        <div>
          <label>x </label>
          <input 
            id="slider"
            type="range" 
            min="-100" 
            max="100"
            value={dpadX}
          />
        </div>
        <span> {dpadY}</span>
        <div>
          <label>y </label>
          <input 
            id="slider"
            type="range" 
            min="-100" 
            max="100"
            value={dpadY}
          />  
        </div>
        <br/>

            <div
                className="movement"
                onMouseDown={handleF}
                onMouseUp={handleMU}
                onTouchStart={handleF}
                onTouchEnd={handleMU}
            >
                <p>forwards</p>    
            </div> 
            
            <div>
                <div id="left"
                    className="movement"
                    onMouseDown={handleL}
                    onMouseUp={handleMU}
                    onTouchStart={handleL}
                    onTouchEnd={handleMU}
                >
                    <p>left</p>    
                </div> 
                <span> </span>
                <div id="right"
                    className="movement"
                    onMouseDown={handleR}
                    onMouseUp={handleMU}
                    onTouchStart={handleR}
                    onTouchEnd={handleMU}
                >
                    <p>right</p>    
            </div>
        </div>
        
        
        <div 
            className="movement"
            onMouseDown={handleB}
            onMouseUp={handleMU}
            onTouchStart={handleB}
            onTouchEnd={handleMU}
        >
            <p>backwards</p>    
        </div>  
        </header>
    </div>
    ); 
}

export default Dpad;
