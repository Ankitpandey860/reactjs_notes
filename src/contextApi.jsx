import ClassComp from "./classcomp";

/*  context api parts 
createContext:to initiate context api
provider:use for update or provide data
useContext: get data from api*/
export default function College(){
    return(
        <div style={{color:'red',backgroundColor:'yellow',width:1000,padding:20}}>
            <h1>context API</h1>
            <ClassComp />

        </div>
    )
}