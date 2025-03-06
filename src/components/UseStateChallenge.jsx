import {useState} from 'react';
const UseStateChallenge =()=>{
    const handleNewUser=()=>{
        const newUser = { name: "NewUser", age: 20 }; // Ensure age is a number
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, newUser]; // Create a new array
            setUserCount(updatedUsers.length);
            setAverageAge(updatedUsers.reduce((a, c) => a + c.age, 0) / updatedUsers.length);
            return updatedUsers;
        });
    }
    const [users,setUsers]=useState([
        {name:'Yaswanth',age:19},
        {name:'Abhi',age:20},
        {name:'Sai Kiran',age:22},
        {name:'Manoj',age:21},
        {name:'Poorna Sai',age:20}
    ]);
    const [userCount,setUserCount]=useState(users.length);
    const [averageAge, setAverageAge]=useState(users.reduce((a,c)=>a+c.age ,0)/users.length);
    return(
        <>
        <ul>
            {
                users.map((user, index)=>{
                    return <li key={index}>
                        <h3>{`${user.name} has age of ${user.age} years`}</h3>
                    </li>;
                })
            }
        </ul>
        <h4>Total users: {userCount}</h4>
        <h4>Average age of the users is: {averageAge}</h4>
        <button onClick={handleNewUser}>New User</button>
        </>
    )
}
export default UseStateChallenge;