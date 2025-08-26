import { useState } from "react";

function Condition(){
    const [count,setcout]=useState(0);
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={()=>setcout(count+1)}>counter</button>

        {count==0?<h1>Condition 0</h1>
        :count==1?<h1>Condition 1</h1>
        :count==2?<h1>Condition 2</h1>
        :count==3?<h1>Condition 3</h1>
        :count==4?<h1>Condition 4</h1>
        :count==5?<h1>Condition 5</h1>
        :<h1>conditon not available</h1>}
        </div>
    )
}
export default Condition