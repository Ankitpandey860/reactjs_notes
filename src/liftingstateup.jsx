function AddUser({SetUser}){
    return(
        <div>
            <h1>add user</h1>
            <input type="text" onChange={(event)=>SetUser(event.target.value)} placeholder="enter user" />
            <hr />
        </div>
    )
}
export default AddUser