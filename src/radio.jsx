import { useState } from "react"

function Radio(){
    const [gender,setgender]=useState('female');
    const[city,Setcity]=useState('delhi')
    return(                                                             
        <div>
            <h1>handle radio and dropdown</h1>
            <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender" value="male" checked={gender=='male'} id="male" />
            <label htmlFor="male">male</label>
            <input type="radio" onChange={(event)=>setgender(event.target.value)} name="gender" value="female" checked={gender=='female'} id="female" />
            <label htmlFor="female">female</label>
            <h2>selected gender {gender}</h2>
            <br/><br/><br/>
            <h3>select city</h3>
            <select value={city} onChange={(event) => Setcity(event.target.value)} defaultValue= "delhi">
            
            <option value="noida">noida</option>
            <option value="gurgaon" >gurgaon</option>
            <option value="delhi" >delhi</option>
            </select>
            <h1>selected city:{city}</h1>
        </div>
    )
}
export default Radio