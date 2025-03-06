const EventPropogation=()=>{
    const handleGrandParentChild=(event)=>
    {
        console.log('Grand Parent div is clicked');
        console.log(event);
    }
    const handleParentChild=(event)=>
    {
        console.log('Parent div is clicked');
        console.log(event);
    }
    const handleChild=(event)=>
    {
        console.log('Child div is clicked');
        console.log(event);
        event.stopPropagation();{/*Use this to stop the propogation phase (bubble up)*/}
    }
    return(
        <>
        <div onClickCapture={handleGrandParentChild} style={{border:'1px solid black',padding:'10px',width:'30rem',height:'30rem'}}>
            <div  onClickCapture={handleParentChild} style={{border:'1px solid black',padding:'10px',width:'20rem',height:'20rem'}}>
                <div onClickCapture={handleChild} style={{border:'1px solid black',padding:'10px',width:'10rem',height:'10rem'}}>
                    Child Div
                </div>
            </div>
        </div>
        </>
    );
}
export default EventPropogation;
