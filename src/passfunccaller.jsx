/* parentfunc*/
function User({display,name,getUser}){
   /* const name="ankit"          abhi hummm childd se yeh pass karree thee ab parent se dekhtee haii */
    return(
        <div>
            <button onClick={()=>display(name)}>display name </button>
            <button onClick={()=>getUser()} >getUser</button>
        </div>
    )
}
export default User