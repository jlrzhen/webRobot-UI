import React, {useEffect, useState} from 'react';
import './Joystick.css';
import sendCoords from '../Robot/RobotControl';

function Joystick() {
  let stickSize = 100;
  let circleSize = 200;
  
  let [circleX, setCircleX] = useState(50);
  let [circleY, setCircleY] = useState(50);
  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);
  let [mouseDown, setMouseDown] = useState(false);
  let [circlePos, setCirclePos] = useState({top:0, left:0});
  let [stickX, setStickX] = useState();
  let [stickY, setStickY] = useState();

  useEffect(() => {
    setCirclePos(document.getElementById("circle").getBoundingClientRect());
    setStickX(0);
    setStickY(0);
  },[]);
  /* TODO: 
      - add dependency for browser window resize
      - changing code issue - suspected stick position refresh??
  */

  const handleDesktop = (e) => {
    /* getBoundingClientRect().top has a ~40 pixel offset for
      determining y-axis, unknown reason so hard coded for now??
    */
    setMouseX(e.clientX-Math.floor(circlePos.left+100));
    setMouseY(e.clientY-Math.floor(circlePos.top+100+30));
    handleMove();
  }

  const handleMobile = (e) => {
    setMouseX(Math.floor(e.touches[0].clientX-(circlePos.left+100)));
    setMouseY(Math.floor(e.touches[0].clientY-(circlePos.top+100+40)));
    handleMove();
  }

  const handleMove = () => { 
    if(
        mouseDown &&
        // Checks if joystick is within outer circle
        ((mouseX < 100 && mouseY < 100) &&
        (mouseX > -100 && mouseY > -100))
      ) {
      handleMD();
    } else {
      handleMU();
    }
  }

  const handleMD = () => {
    setCircleX(mouseX+50);
    setCircleY(mouseY+50);
    setMouseDown(true);
    setStickX(circleX-50);
    setStickY((circleY-50)*-1);
    sendCoords(stickX, stickY, true);
  }

  const handleMU = () => {
    if(
      (circleX !== 50 && circleY !== 50) &&
      (stickX !== 0) && (stickY !== 0) 
    ) {
      setCircleX(50);
      setCircleY(50);
      setMouseDown(false);
      setStickX(0);
      setStickY(0);
      sendCoords(0, 0, false);
    }
  }

  return (
    <div className="Component">
      <header className="Component-header">
        {/* <p>{mouseX} {mouseY}</p> */}
        {/* <p>{circleX} {circleY}</p> */}
        {/* <p>
          {mouseDown.toString()} {' '} 
          {Math.floor(circlePos.top)} {' '} 
          {Math.floor(circlePos.left)}
        </p>  */}
        <span>{stickX}</span>
        <div>
          <label>x </label>
          <input 
            id="slider"
            type="range" 
            min="-100" 
            max="100"
            value={stickX}
          />
        </div>
        <span> {stickY}</span>
        <div>
          <label>y </label>
          <input 
            id="slider"
            type="range" 
            min="-100" 
            max="100"
            value={stickY}
          />  
        </div>
        <br/>
        <div
          id="circle"
          value="10"
          style={{
          height: circleSize + 'px',
          width: circleSize + 'px',
          }} 
        > 
          <div 
            id="stick" 
            onMouseDown={handleMD}
            onMouseUp={handleMU}
            onMouseMove={handleDesktop}
            
            onTouchStart={handleMD}
            onTouchEnd={handleMU}
            onTouchMove={handleMobile}
            style={{
              left: circleX + 'px',
              top: circleY + 'px',
              height: stickSize + 'px',
              width: stickSize + 'px'
            }}
          ></div>
        </div>
      </header>
    </div>
  ); 
}

export default Joystick;
