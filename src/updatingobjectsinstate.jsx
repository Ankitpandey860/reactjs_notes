import { useState } from "react"

export default function Update(){
    {/*const [name,setname]=useState('ankit')*/}
    const [data,setdata]=useState({
        name :'ankit pandeyy',
        address:{
            city: 'delhi',
            country:'india'
        }
    })
    const handleName=(val)=>{
        data.name=val
        setdata({...data})
    }
    const handlecity=(val)=>{
        data.address.city=val
        setdata({...data})
    }
    return(
            <div>
                <h1>updating objects in state</h1>
                {/*<h2>{name}</h2>
                <button onClick={()=>setname('ankit pandey')} >Update name </button>
                <button onClick={handleName} >Update</button>*/}
                <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)} />
                <input type="text" placeholder="update city" onChange={(event)=>handlecity(event.target.value)} />
                <h2>name:{data.name}</h2>
                <h2>city:{data.address.city}</h2>
                <h2>country:{data.address.country}</h2>
            </div>
    )
}