import { useEffect } from "react";

const Num=({number,digitvalue})=>{
    const numhandler=()=>{
        console.log("number handler called");
    }

    const DIGIT=()=>{
        console.log("digit handler called ");
    }


    useEffect(()=>{
        numhandler();
    },[])// khaali hone se yeh ek hi baar call hoga 


    useEffect(()=>{
        DIGIT();
    },[digitvalue])




    return(
        <div>
            <h1>counter component{number}</h1>
            <h1>digits component {digitvalue}</h1>
        </div>
    )
}
export default Num


