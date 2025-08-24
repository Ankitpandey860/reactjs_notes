function ToDo(){
    function callfun(){
        alert("function called")
    }
    return(
        <div>
            <h1>ankit pandey todos</h1>
            <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fuizard.io%2Ftemplates%2Fwebsite-templates%2Fto-do-website%2F&psig=AOvVaw0vgIERXWlJeglrrt0QP_ZC&ust=1756122895402000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICH4d2xo48DFQAAAAAdAAAAABAE"
            class="photo"
            />
            <ul>
                <li>invent new traffic </li>
                <li>rehearse a movie scene</li>
                <li>improve the spectrum technology</li>
            </ul>
        
            <button onClick={callfun}>click me</button>{/*js me onclick hota haii react me onClick i.e. captiacl 'c' */}
            
            {/*agr callfun( ) aise call kiya toh site load hote hi run hoga pr click pe nhi agrrrr normal comment likhunga
            woh show ho jaaayegaa screen pe aise likhunga toh nhi hogaa
            react me jo onClick hota hai usee func ka defination cahiye hota haii na ki call 
            callfun()---func call 
            callfun--- defination */}
        </div>
    )
}

export default ToDo;