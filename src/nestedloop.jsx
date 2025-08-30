import College from "./college"

function Nest(){
    const collageData=[
        {
            name:"msit",
            city:"delhi",
            website:"msit.com",
            student:[
                {
                    name: "ankit ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
                {
                    name: "peter ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
                {
                    name: "bruce ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
            ]
        },
        {
            name:"nit kharakpur",
            city:"haryana",
            website:"nit.com",
            student:[
                {
                    name: "ankit ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
                {
                    name: "peter ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
                {
                    name: "bruce ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
            ]
        },
        {
            name:"iit b",
            city:"mumbai",
            website:"iit.com",
            student:[
                {
                    name: "ankit ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
                {
                    name: "peter ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
                {
                    name: "bruce ",
                    age: "20",
                    email:"ank@gmsil.com"
                },
            ]
        },
        
    ]
    return(
        <div>
            <h1>nested looping with components</h1>
            {
                collageData.map((college,index)=>(
                    <div key={index}>
                        {/*<h1>name:{college.name}</h1>
                        <ul>
                            <li>                                  aise bhi kr sktee  haii yaa 
                                <h3>city:{college.city}</h3>
                            </li>
                            <li>
                                <h3>website:{college.website}</h3>
                            </li>
                        </ul>*/}

                        <College college={college} />
                    </div>
                ))
            }
        </div>
    )
}
export default Nest