import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";

  return <button  style ={{background:color}}onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}
function Countdown(){
const [count, SetCount]=useState(10)

function clicker(){
SetCount( (count) -1 )



}



return <button onClick={clicker}> {count} </button>


}
export default Toggle;
