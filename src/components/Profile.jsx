const Profile=()=>{
    return(
        <>
        <ProfileCard 
        name='Yaswanth'
        age={20}
        greetings={
            <div>
                <strong>Hello Yaswanth, keep up the great work!</strong>
            </div>
        }
        >
            <p>Hobbies: Reading, Hiking</p>
            <button>Contact</button>
        </ProfileCard>
        </>
    );
}
export default Profile;
const ProfileCard =(props)=>{
    return(
        <>
        <h1>Name: {props.name}</h1>
        <h2>Age: {props.age}</h2>
        <p>{props.greetings}</p>
        <div>{props.children}</div>
        </>
    );
}