import ToDo from './todo'
import Funcc from './funtions'
import Variables from'./variableandsomedatatypes'
import Userlogin ,{Profile ,Setting, userkey} from './usercomponents'
import State from './state'
import Toggle from './toggle'
import Condition from './conditions'
import User from './props'
import Cont from './controlledcomponent'
import Checkboxes from './handlecheckbox'
import Radio from './radio'
import Loop from './loopandarray'
import Reuse from './reusecomponentinloop'

function App() {
  /*  let email="ankitp6040@gmail.com"/* propssss ke liyeeeee*/
  let userObj={
    name:"ankit pandey",
    age:19,
    email:"ankitp6040@gmail.com"
  }
  return (
    /*
      <h1>hello world</h1>
      <h1> this will show an error </h1>
    */
   /*this is correct way */
    <div>
      <h1> we are in correct block</h1>
      <h1>no error found </h1>
        {/*
        <Demo />
        <Demo2 />
        <Comp />
        <Userlogin />
        <Profile />
        <Setting />
        <ToDo />
        <Variables />
        <Funcc />
        <State />
        <Toggle />
        <Condition />
        <h1>{userkey}</h1>
        <h1>{func()}</h1>   {/* yeh line func() ka return UI me dikhayegi      /
      
        <User name ="ankit pandey" age ={19} email={email}/> {/* yeh haii props me value pass ki haii dekho waha     /
          <User User={userObj}></User>
        *}
        
        <Cont />
        <Checkboxes />*/}
        <Radio />
        <Loop />
        <Reuse />
    </div>
  
  )
}
function Demo(){
  return(
    <div>
    <h1> muliple component bnake unhe execute krne ka tarika </h1>
  </div>
  )
  
}
function Demo2(){
  return(
  <div>
    <h1> isko bhi kr lete hai runn  </h1>
  </div>
  )
}
/* DIFFERENCE BETWEEN FUNCTION AND COMPONENT */
function Comp(){            /* DIFFERENCE BETWEEN FUNCTION AND COMPONENT */
  return(
    <div>
      <h1>this is component</h1>
      <h1>iske ander hum html tags bhi use kr skte hai<br></br> andddd naam ka pehla letter capital </h1>
    </div>
    
  )
}
function func(){
  /*(" so this is a function where we can we js , for function the first name of letter is in small 
  and that is how compiler difference between them")*/      
  /*yeh isiliye use nhi krra kyuki console log browser ke console pe krtaa haii na ki screen pe */

  return " so this is a function where we can we js , for function the first name of letter is in small and that is how compiler difference between them" ;
}
export default App;
