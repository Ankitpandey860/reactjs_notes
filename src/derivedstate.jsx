/* jb kisi variable me state ki thodi bhot value rakh lete h use derived state kehte h */

import { useState } from "react"

/*state that is calculated or derived  from other  state values or props  within components 
derived state can be a variable 
no need to extra state only variables or constants are enough */
function DerivedState(){
    const [users,setUsers]=useState([])
    const [user,setUser]=useState('')
    const handleAddusers=()=>(
        setUsers([...users,user])
    )
    const total=users.length
    const last=users[users.length-1]
    const unique=[...new Set(users)].length
    return(
        <div>
            <h1>total user{total}:</h1>
            <h1>last user:{last}</h1>
            <h1>unique total user:{unique}</h1>
            <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder="add new user" />
            <button onClick={handleAddusers} >add user</button>
            {
                users.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )
}
export default DerivedState