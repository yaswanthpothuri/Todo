import {useState} from 'react';
const Incrementer=()=>{
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(()=>count+1);
    }
    return(
        < div style={{display:'flex' ,justifyContent:'center',alignItems:'center',justifyItems:'center', flexDirection:'column'}}>
        <h1>{count}</h1>
        <button onClick={handleIncrement} style={{width:'20rem',height:'5rem',fontSize:'1.5rem',backgroundColor:'black',color:'white'}}>Increment</button>
        </div>
    )
}
export default Incrementer;