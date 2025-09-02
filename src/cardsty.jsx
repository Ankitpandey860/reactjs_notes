import { useState } from "react"

/* dynamic and conditional inline style krenge */
function Changegrid(){
    const [cardstyle,setCardStyle]=useState(
        {border:"1px solid #cccccc3b",
        width:" 200px",
        boxShadow:"1px 2px 5px 10px #cccccc3b"}
    )
    const updatetheme=(bgcolor,textColor)=>{
        setCardStyle({...cardstyle,backgroundColor:bgcolor,color:textColor})
    }
    const [grid,setgrid]=useState(true)
    
    return(
        <div>
                <h1 style={{color:'red'}}>hello world</h1>



                <button onClick={()=>setgrid(!grid)}>toggle grid</button>

                <button onClick={()=>updatetheme('gray','green')}>grey theme</button>
                <button onClick={()=>updatetheme('white','black')}>default theme</button>
            <div style={{display:grid?'flex':'block', flexWrap :'wrap'}}>
                <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div>
                <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div> <div style={cardstyle}>
                    <div>
                        <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
                    </div>
                    <div>
                        <h3>ANKIT PANDEY</h3>
                        <h4>REACT NOTES</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}
   /* return(
        <div>
            <h1 style={{color:'red'}}>hello world</h1>

            <button onClick={()=>updatetheme('gray','green')}>grey theme</button>
            <button onClick={()=>updatetheme('white','black')}>default theme</button>
            <div style={{border:"1px solid #cccccc3b",   // yaha pe card style daal do {cardstyle} aisee 
                width:" 200px",
                boxShadow:"1px 2px 5px 10px #cccccc3b"}}>
                <img style={{width:'200px'}}  src="https://www.w3schools.com/images/w3schools_green.jpg" alt="#" srcSet="" />
            </div>
            <div>
                <h3>ANKIT PANDEY</h3>
                <h4>REACT NOTES</h4>
            </div>
        </div>
    )
}*/
export default Changegrid