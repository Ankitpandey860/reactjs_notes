const User=({data})=>{
    return(
        <div style={
            {
                border: "1px solid green" ,
                padding: "10px",
                margin:"10px",
                width: "400px",
                borderRadius: "10px"
            }
        }>
            <h1>user component</h1>
            <h3>name :<span style={{color:'green'}}>{data.name}</span></h3>
        </div>
    )
}
export default User;


/* interview questions 
****loop lgao map func ke saath and component ko reuse krke dikhao 

*** react me hyphen"-" ki jagah camelcase kyu use krte h */