import User from "./User"

function Reuse(){
    const userdata=[
        {
            name:'ankit pandey',
            age:'20',
            email:"ankitp6040@gmail.com",
            id: 1
        },
        {
            name:'prashaant',
            age:'20',
            email:"parashant6040@gmail.com",
            id: 2
        },
        {
            name:'aman',
            age:'20',
            email:"amanp6040@gmail.com",
            id: 3
        },
        {
            name:'ayush',
            age:'20',
            email:"ayushp6040@gmail.com",
            id: 4
        }
    ]
    return(
        <div>
            <h1>reuse </h1>
            {
                userdata.map((user)=>(
                    <div key={user.id}>
                        <User data={user} />
                    </div>
                    
                ))
            }
        </div>
    )
}
export default Reuse