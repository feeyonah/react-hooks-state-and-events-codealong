import React , {useState} from "react";
function Countdown(){
    const [count, SetCount]=useState(10)
    
    function clicker(){
    SetCount( count -1 )
    
    
    
    }
    
    
    return <button onClick={clicker}> {count} </button>
    
    
    }
    export default Countdown;