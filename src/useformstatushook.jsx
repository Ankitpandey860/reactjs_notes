import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
function Formstatus(){

    const handlesubmit=async()=>{
        await new Promise( res=>setTimeout(res,5000));
        console.log("submitting")
    }


    function CustomerForm(){
        const {pending}= useFormStatus();
        console.log(pending)
        return(
            <div>
                <form action={handlesubmit}>
                    <input type="text"  placeholder="enter name" />
                    <br/><br/>
                    <input type="text"  placeholder="enter password"/>
                    <button disabled={pending} >submit</button>
                </form>
            </div>
        )
    }
    return(

        <div>
           <h1> form status hook</h1> 
          {/*} <form action={handlesubmit}>
                <input type="text"  placeholder="enter name" />
                <br/><br/>
                <input type="text"  placeholder="enter password"/>
                <button  >submit</button>
           </form>
           
           
           see ek option h me aisee krluu yaaa theress moree optionn  alag func bnakee usme call krluu tab bhi 
           chal jaayega */}
           <CustomerForm />
        </div>
    )
}
export default Formstatus