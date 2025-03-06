import {useState} from 'react';
const LifitingState=()=>{
    const [value , setValue]=useState("");
    return(
        <>
        <h1>hello</h1>
        <InputComponent setValue={setValue}/>
        <DisplayComponent value={value}/>
        </>
    );
}
const InputComponent=({setValue})=>{
    return ( 
    <input
    type='text'
    onChange={(e)=>setValue(e.target.value)}
    placeholder="Enter the text"
    >
    </input>);
}
const DisplayComponent=({value})=>{
    return <h1>The Entered text is :"{value}"</h1>
}
export default LifitingState;