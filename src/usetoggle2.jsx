import useToggle from "./useToggle"

export default function Toggle(){
    const [value,toggleValue]=useToggle(true)
    return(
        <>
        <button onClick={()=>(toggleValue(!value))}>Toggle</button>
        <button onClick={()=>(toggleValue(false))}>hide</button>
        <button onClick={()=>(toggleValue(true))}>show</button>
        {
            value?<h1>customised hook</h1>:null
        }
        
        </>
        
    )
}