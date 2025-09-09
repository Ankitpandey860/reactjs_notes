import { useActionState } from "react"

function UseAction(){
    const handleSubmit=async (previousdata,FormData)=>{
        let name=FormData.get('name')
        let password=FormData.get('password')
        await new Promise(res=>setTimeout(res,2000))
        if(name&&password){
            return{message:'Data submitted'}
        }
        else{
            return {error:'failed to submit.enter proper data'}
        }
    }
    const [data,action,pending]=useActionState(handleSubmit,undefined)
    return(
        
        <div>
            <h1>use action State</h1>
            <form action={action}>
                <input type="text" placeholder="enter name" name="name" />
                <br/> <br/>
                <input type="password" placeholder="enter password" name='password' />
                <br/> <br/>
                <button disabled={pending}>submit</button>
                {
                    data?.error&&<span>{data?.error}</span>
                }
                {
                    data?.message&&<span>{data?.message}</span>
                }

            </form>
            
        </div>
    )
}
export default UseAction