/* agar return ke bhar use krnaa hai toh normal jsx use kr skte ho wrna ander map ke through krna pdega abhi yaha seekhenge */

function Loop(){
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
    return (
        <div>
            <h1>loop in jsx with map function</h1>
            <table border={5} cellPadding={10} >
                <thead>
                    <tr>
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                   { 
                    userdata.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>))}
                </tbody>
            </table>

            <h1>data without Loop</h1>
            <table border={1}  cellPadding={10}>
                <thead>
                    <tr>
                        
                        <td>name</td>
                        <td>email</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ankit</td>
                        <td>ankitp6040@</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>prashaant</td>
                        <td>prashant6040@</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>ankit</td>
                        <td>ankitp6040@</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}
export default Loop