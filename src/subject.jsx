import { subjectContext } from "./ContextData";
import { useContext } from "react";
export default function Subject(){
    const subject=useContext(subjectContext)
    return(
        <div style={{color:'orange',backgroundColor:'pink',width:"100%",padding:20}}>
            <h1>subject is {subject}</h1>
            
        </div>
    )
}