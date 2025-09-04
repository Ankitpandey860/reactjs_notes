import { useRef } from "react"
function Inputf(){

    const inputref=useRef(null)
    const inputHandler=()=>{
        inputref.current.focus();
        inputref.current.style.color='red'
        inputref.current.placeholder="enter password"
            
        
    }

    const toggleHandler=()=>{
        
        if(inputref.current.style.display!="none"){
            inputref.current.style.display="none"
        }
        else{
            inputref.current.style.display="inline"
        }
    }
    
    return (
        <>
        <h1>useref</h1>
        <button onClick={toggleHandler}>toggle</button>
        <input ref={inputref} type="text" placeholder="enter username" />
        <button onClick={inputHandler}>focus on input field </button>

        </>
    )
}
export default Inputf


/* ismeeeeee hummm directlyy dom ko manipulate krre ho isliye ise prefer nhi kiya jaata */