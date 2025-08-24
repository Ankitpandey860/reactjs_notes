/*hum app.jsx me bhi saara code likh skte hai and jitne chahe components bna skte hai koi dikkat nhi hai 
but use itna heavy na bnane ke liye hum alag ek file bnate hai jisme saare components define krte hai and unhe yaha se jaha bhi chahiye export krte hai andddd jaha use krna hai waha import krte hai */
function Userlogin(){
    return(
        <div>
            <h1>user login</h1>
        </div>
        
    )
}

/*export default                              /* yeh jo main default hoga , primary component use export krega ek file me ek hi primary hotahai */
export default Userlogin ;
/*agar me isko export userlogin likhta toh merko app.jsx me login ki jagah {login} likhna padta */
export function Profile(){
    return(
        <h1>Profile</h1>
    )
}
export function Setting(){
    return(
        <h1>Setting</h1>
    )
}
export const userkey= "abc";
/*jsx kya hota hai    ----- yeh bhi bs js ka hi extension h i.e. uska syntax use kr skte hai proper js hi tha but isme thode updates krke ise usse alag bna diya gya jaise isme html bhi ab likh skte hai */  
/*jsx   = js + html s

jsx stands for javascript syntax extension    at some websites and resources , books it is also defined as javascript xml 
but in official documentation it is never mentioned */
