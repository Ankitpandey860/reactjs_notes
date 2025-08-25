
/*TOGGLE ORR HIDE ANDD SHOWWWW */


/*
    * define state 
    * update state on button click 
    * add condition for toggle 
    * hide and show component 
*/

import { useState } from "react";
import State from './state'
function Toggle(){
    const [display,setdisplay]=useState(true)
    return(
        <>
            <h1>toggle in react js</h1>
            <button onClick={()=>setdisplay(!display)}>toggle</button>
            {/*
                display? <h1>ankit pandey</h1>:null
            */}
            {
                display? <State />: null
            }
        </>
    )
}

export default Toggle