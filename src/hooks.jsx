/* topics
    *what are hooks 
    *why we need hooks 
    * some hooks name
    * history of hooks 
    * how to identify hooks */

import { useEffect, useState } from "react";
import Num from "./usestateforprops";

    /*

    /* in old react version we were using class base component , in which   ,state ,lifecycle were working properly 
    but when function components were introduced state,lifecycle,dom manipulation  and some other features were not able to run thats why hooks came into picture */

    /*popular react hooks 
        *useState
        *useEffect
        *useContext
        *useRef
        *useReducer
        *etc
        */
/*           USEFFECTS HOOK
    *Remove side effects inside component 
    *Remove side effects from outside component 
    *use to fetch data
    *can use as lifecycle methods
    *can use for dom manipulation 
    *much more 
    */



    /*            SYNTAX                  
        useEffect(()=>{
            write yourrrr codeee yahaaa 
            },[state or propss ])
            */

function Hook(){
    const [counter,setCount]=useState(0)
    const [data,setData]=useState(0)
    useEffect(()=>{
        effecthook();
        dataFunction();/* ab yeh bs data update hone pe hoga runn wrnaaa counter pe bhi hota */
    },[data])/*ab ek baar hi renderr hogaaa yaha btaya ki data ke update pe run krnaa haii */
    

    function dataFunction(){
        console.log("datafunction",data);
    }
    function effecthook(){
        console.log("effecthook function called ");
    }
    /*effecthook();    bina useeffect ke jitni baar click krenge utni baar render hogaa use rokne ke liye use effect krte h (agr na kre toh loss kya hoga padhoo)*/
    
    
    const [num,setNum]=useState(0)
    const [digit,setDigit]=useState(0)
    
    
    
    
    
    return(
        <div>
            <h1>useEffect hook</h1>
            <button onClick={()=>setCount(counter+1)}>counter {counter}</button>
            <button onClick={()=>setData(data+1)}>data {data }</button>



            <Num number={num} digitvalue ={digit} />
            <button onClick={()=>setNum(num+1)}>num {num}</button>
            <button onClick={()=>setDigit(digit+1)}>digit {digit}</button>
        </div>
    )
}

export default Hook
