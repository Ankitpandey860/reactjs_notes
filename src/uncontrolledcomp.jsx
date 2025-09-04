import { useRef } from "react";
function Uncont(){
    const handleform=(event)=>{
            event.preventDefault();
            const user=document.querySelector("#user").value;
            const pass=document.querySelector("#password").value;
            console.log(user,pass);
        }  
    const userRef = useRef();
    const passRef = useRef(); 
    const handleformref=(event)=>{
        event.preventDefault();
        console.log("handleformref")
        const userr=userRef.current.value;
        const pass=passRef.current.value;
        console.log(userr,pass)
    }
    
    return(
        <>
        
        <h1>uncontrolled component</h1>
        <form action="" method="post " onSubmit={handleform}>
        <input type="text" id="user" placeholder="enter username" />
        <br/> <br/>
        <input type="password" id="password" placeholder="enter password"/>
        <button>submit</button>
        </form>
        <hr></hr>
        <h1>uncontrolled component using useref</h1>
        
        <form action="" method="post " onSubmit={handleformref}>
        <input type="text" ref={userRef} id="userRef" placeholder="enter username" />
        <br/> <br/>
        <input type="password" ref={passRef} id="passwordREf" placeholder="enter password"/>
        <button>submit</button>
        </form>
        </>
    )
}
export default Uncont