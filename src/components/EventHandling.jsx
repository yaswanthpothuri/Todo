const EventHandling=()=>{
    const handleSubmitButton=(event)=>{
        alert("Hey, Iam Clicked");
        console.log(event);
        console.log(event.target);
        console.log(event.type);
    }
    const handleWelcomeUser=(user)=>{
        alert(`Welcome to My website ${user}`)
    }
    return(
        <>
        <button onClick={handleSubmitButton}>Click Me 1</button>
        <br />
        <button onClick={(e)=>handleSubmitButton(e)}>Click Me 2</button>
        <br />

        <button onClick={()=>alert('Hey i am handled using inline')}>Click Me Inline handling</button>
        <br />

        <button onClick={()=>handleWelcomeUser("yaswanth")}>Click Me</button>
        </>
    );
};
export default EventHandling;