/* topics --:diff between  js func call and react func call 
button and click event 
call func on click event 
call arrow func
pass params with func call */
function Funcc(){
    const fruits=()=>{
        alert("apple")
    }
    return(
        <div>
            <button onClick={fruits}>check fruit</button>
        </div>
    )
}
export default Funcc