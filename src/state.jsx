/* 

  "dependencies": {
    "react": "^19.1.1", /*19--major release ,1 minor release ,1 patch(chote mote bugs)
    "react-dom": "^19.1.1"
  },
  
  
  /*interview question :- latest version kya h react ka 
version check kaise krte hai 
update kyu krte hai 
major update,minor update ,patch*/



/* why states are required*
react me koi value change krne ke liye hume states ki jarurat hoti hai */


/*what are states in react js 
*state is a container to store data like variable 
*this is mutable and dynamic 
we have to import it when we want to use it 
*it re-render component AUTOMATICALLY so that data can  visible on ui 
*/
/*
HOOKS IN REACT JS 
*hooks are the special feature for funtional component 
*hooks let you use different react features from your components 
    ->state,
    ->life cycle methods 
    ->side effects etc
*/



/*
function State(){
    let fruits ="apple ";
    const handlefruits=()=>{
        fruits="banana"             
    }
    return(
        <div>
            <h1>{fruits}</h1>
            <button onClick={handlefruits}>change fruit name </button>
        </div>
    )
}
*/

/*here we expect ki button click krne pe fruit change ho jaayega but aisa nhi h
js me toh aisa shi h but react js me nhi isiliye states use krte hai */
import { useState } from "react";
function State(){
    const [fruit,setFruit]=useState("apple");
    const [count,abc]=useState(124);/*abc bs naam hai jo kuch bhi rakh skte h bs func ke liye wahi use krna neeche dekho 
    first naam hai uski value hai and second waala ka func hai */
    const handlefruits=()=>{
        setFruit("bnana")             
    }
    const handleCount = () => {
     abc(count + 1); // update count
    }
    return(
        <div>
            <h1>{fruit}</h1>
            <button onClick={handlefruits}>change fruit name </button>
            <h1>{count}</h1>
            <button onClick={handleCount}>change count </button>
        </div>
    )
}

export default State


