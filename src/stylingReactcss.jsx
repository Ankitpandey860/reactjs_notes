function Card(){
    /*cosnt cardstyle={border:"1px solid #cccccc3b",
                width:" 200px",
                boxShadow:"1px 2px 5px 10px #cccccc3b"}      yeh bhi shi haii */
    return(
        <div>
            <h1 style={{color:'red'}}>hello world</h1>
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
}
export default Card