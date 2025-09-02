import style from'./css/userprofile.module.css'
function Userprofile(){
    return(
        <div>
            <div>
                <h1 className={style.heading}>user Profile</h1>
                <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="" />
                <div>
                    <h4>ankit pandey</h4>
                    <p>software developer</p>
                </div>
            </div>
        </div>
    )
}
export default Userprofile