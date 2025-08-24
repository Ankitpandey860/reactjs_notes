/*to learn variables condtions function operation object array html tags property*/
function Variables(){
    const name ="ankit pandey";
    let age=19;
    let ageafter_Fiveyears=age+5;
    let x=5;
    let y=10;
    function fruit(){
        return "apple"
    }
    function sum(a,b){
        return a+b;
    }
    function operation(a,b,op){
        if(op=="+"){
            return a+b;
        }
        else if(op=="-"){
            return a-b;
        }
        else if(op=="*"){
            return a*b;
        }
        else if(op=="/"){
            return a/b;
        }
        else{
            return "invalid operation "
        }
    }
    const details={
        name: "ankit pandey",
        email: "ankitp6040@gmail.com",
        age:19
    }
    const path="https://www.scripps.org/sparkle-assets/images/dogs_cats_rabbits_pets_1200x750-e017741227f7382c3ba7aaeb27b28297.jpg"
    const heroes=['thor','hulk','iron_man']
    return(
        <div>
            <h1>{name?name:"user not found"}</h1> {/*yeh ternary lgaya hai agr name h toh name dega wrna user not found 
            agr undefine hai toh bhi */}
            <h1>{age}</h1>
            <h1>{ageafter_Fiveyears}</h1>
            <h1>{x+y}</h1>
            {fruit()}<br></br>
            {sum(x,y)}
            {operation(18,6,"/")}<br></br>
            {operation(18,6,"*")}<br></br>
            {operation(18,6,"-")}<br></br>
            {operation(18,6,"+")}<br></br>
            {operation(18,6,"#")}<br></br>
            <h1>{details.name}</h1>
            <h1>{details.age}</h1>
            <h1>{details.email}</h1>
            <h1>{heroes[0]}</h1>
            <h1>{heroes[1]}</h1>
            <h1>{heroes[2]}</h1>
            <img src={path} alt="pet" width="300"/>
        </div>
    )
}
export default Variables;