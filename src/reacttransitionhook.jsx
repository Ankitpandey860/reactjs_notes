import { useState, useTransition } from "react";

function Transition(){
    /*const [pending,setPending]=useState(false)
    const handlebutton=async ()=>{
        setPending(true)
        await new Promise(res=>setTimeout(res,2000))       ek way yeh h ab transition  hook ko use krke dekhte hai 

        setPending(false)
    }*/
    const [pending,startTransition]=useTransition();
        const handlebutton=async()=>{
            startTransition(async ()=>{
                await new Promise(res=>setTimeout(res,2000))
            })
            
        }
    return(
        
        <div>
            <h1>use transiotion hooks in react js</h1>
            <button disabled={pending} onClick={handlebutton} >click</button>
        </div>
    );
}
export default Transition