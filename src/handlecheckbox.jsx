import { useState } from "react"

/* handlee checkboxx
    * make checkbox
    *define state  for checkbox
    *get checkbox value in state 
    *remove checkbox value in state 
    * interview
*/
function Checkboxes(){
    const [skills,setSkills]=useState([])
    const handleskills=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkills([...skills,event.target.value]);
        }
        else{
            setSkills([skills.filter((item)=>item!=event.target.value)])
        }
    }
    return(
        <div>
            <h3>select your skills</h3>
            <input onChange={handleskills}type="checkbox" id="html&css" value="html"/>
            <label htmlFor="html&css">html&css</label><br/>
            
            <input onChange={handleskills}type="checkbox" id="js"  value="js"/>
            <label htmlFor="js">js</label><br/>

            <input onChange={handleskills}type="checkbox" id="c++" value="c++"/>
            <label htmlFor="c++">c++</label><br/>
            <h1>{skills}</h1>
        </div>
    )
}
export default Checkboxes