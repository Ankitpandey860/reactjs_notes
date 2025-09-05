import User from "./passfunccaller";

/* child func */
function Caller(){
    const displayname=(name)=>{
        alert(name)
    }
    const getUser=()=>{
        alert("getuser called")
    }
    return(
        <div>

            <h1>call parent from child</h1>
            <User display={displayname}  name="ankit" getUser={getUser}  />{/* onClick naam h but passing event jaisa kuch nhi hota yeh bs naam haii */}
            <User display={displayname}  name="aman" getUser={getUser}/>
            <User display={displayname}  name="prashant" getUser={getUser} />
            <User display={displayname}  name="ajeet" getUser={getUser}/>

        </div>
        
    )
}
export default Caller