/*
function College({college}){
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
export default College*/
function College({ college }) {
  return (
    <div style={{
      background: "#ccc",
      padding: "20px",
      borderRadius: "10px",
      margin: "20px",
      borderBottom: "2px solid #000"
    }}>
      <h1>Name: {college.name}</h1>
      <ul>
        <li>
          <h3>City: {college.city}</h3>
        </li>
        <li>
          <h3>Website: {college.website}</h3>
        </li>
        <li>
          <h3>Students</h3>
          <ul>
            {college.student.map((student, index) => (
              <li key={index}>
                <h4>{student.name}</h4>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default College;
