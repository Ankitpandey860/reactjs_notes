import { useActionState } from "react"

function UseAction(){
    const handleSubmit=async (previousdata,FormData)=>{
        let name=FormData.get('name')
        let password=FormData.get('password')
        await new Promise(res=>setTimeout(res,2000))
        if(name&&password){
            return{message:'Data submitted',name,password}
        }
        else{
            return {error:'failed to submit.enter proper data',name,password}
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
                

            </form>
            {
                    data?.error&&<span>{data?.error}</span>
                }
                {
                    data?.message&&<span>{data?.message}</span>
                }
                <h3>name :{data?.name}</h3>
            
        </div>
    )
}
export default UseAction