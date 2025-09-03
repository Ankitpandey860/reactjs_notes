import styled from "styled-components";
function Stcomp(){
   /* const Heading =styled.h1`
        border-radius:50%;
        padding: 50px;
        margin:20px;
        color:red;
    `*/
    const Heading =styled.h1({
        borderRadius:'50%',
        padding:' 50px',
        margin:'20px',
        color:'red',
    })
    const StylBtn=styled.button`
    color:red;
    box-shadow:5px 5px 10px #000;
    `
    return(
        <div>
            <h1>styled components with react </h1>
            <StylBtn>login here</StylBtn>
            <Heading>ispe chalega jaaduu</Heading>
        </div>
    )
}
export default Stcomp
/* ise styled component isiliye kehte hai kyuki yeh styled jo hai na yeh apne aap me ek component haii and ispe bs hum style lgate h and use kr dete haii*/