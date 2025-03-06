import styled from'styled-components';
const EventProps=()=>{
    const handleOnClick=(user)=>{
        alert(`Hey ${user}! Thank you for clicking me`)
    }
    return(
        <>
        <WelcomeUer Onclick={()=>handleOnClick('Yaswanth')} Onhover={()=>alert('Hey! Thank you for hovering me')}/>
        </>
    );
};
export default EventProps;
const WelcomeUer=(props)=>{
    const OnClickButton =styled.button({
        width:'7rem',
        height:'3rem',
        backgroundColor:'black',
        color:'white',
        marginRight:'1rem',
    });
    const OnHoverButton=styled.button`
    width:7rem;
    height:3rem;
    background-color: black;
    color:white;
    `;
    return(
        <>
        <OnClickButton onClick={props.Onclick}>Click Me</OnClickButton>
        <OnHoverButton onMouseOver={props.Onhover}>Hover me</OnHoverButton>
        </>
    );
}