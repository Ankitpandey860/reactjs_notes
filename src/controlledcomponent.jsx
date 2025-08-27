/*a controlled  component is a form whose input field value is controlled by react's state */

import { useState } from "react"

/*
* here's how it works :
    *store input field value in state 
    * use change handler with input field 
    * value attribute attached with state 
benefis
    *single source of truth 
    *validation and manipulation before submit 
    * dynamic updates values 
*/
function Cont(){
    const[name,setname]=useState('');
    const[password,setpassword]=useState('');
    const[email,setemail]=useState('');

    return(
        
        <div>
        <h1>controller Component</h1>
        <form action="" method="get">
            <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter value"/>
            <br/>
            <input type="text" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="Enter password"/>
            <br/>
            <input type="text" value={email} onChange={(event)=>setemail(event.target.value)} placeholder="Enter email"/>
            <br/>
            <button>submit</button>
            <h3>{name}</h3>
            <h3>{password}</h3>
            <h3>{email}</h3>

        </form>
        </div>
    )
}
export default Cont