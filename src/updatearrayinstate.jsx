import { useState } from "react"

function Arr(){
    const[data,setdata]=useState(['ankit','aman','ajit'])
    const[data2,setdata2]=useState([
        {name:'ankit',age:'20'},
        {name:'ajit',age:'20'},
        {name:'aman',age:'20'}
    ])
    const handleUser=(name)=>{
        data[data.length-1]=name
        setdata([...data])
    }
    const handleUser2=(age)=>{
        data2[data2.length-1].age=age
        setdata2([...data2])
    }
    return(
        <div>
        <h1>updating array</h1>
        <input type="text" placeholder="enter new elem" onChange={(e)=>handleUser(e.target.value)}/>
        {
            data.map((item,index)=>(
                <h3 key={index}>{item}</h3>
            ))
        }
        <hr />
        <input type="text" placeholder="age"  onChange={(e)=>handleUser2(e.target.value)} />
        {
            data2.map((item,index)=>(
                <h3 key={index}>{item.name}{item.age}</h3>
            ))
        }
        </div>
    )
}
export default Arr