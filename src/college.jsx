function College({college})=>{
    return(
        <div style={{
            background:"#ccc",
            padding:"20px",
            borderRadius:"10px",
            margin:"20px",
            borderBottom:"2px solid #000"
        }}>
                <h1>name:{college.name}</h1>
                 <ul>
                    <li>                                  
                        <h3>city:{college.city}</h3>
                    </li>
                    <li>
                         <h3>website:{college.website}</h3>
                    </li>
                    <li>
                    <h3>students</h3>
                    {
                        
                        college.student.map((student)=>(
                            
                            <ul>
                                <h4>{student.name}</h4>
                            </ul>
                            
                        ))
                    }
                    </li>
                 </ul>
        </div>
    )
}
export default College
