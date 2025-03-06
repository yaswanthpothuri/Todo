const Pratice=()=>{
    const Students=[];
    return(
        <>
            <p>
                {/* {Students.length && "Students Not Found"} */}
            </p>{/* This is the problem */}
            {/* 1st */}
            <p>{!Students.length && "Students Not Found"}</p>
            {/*2nd */}
            <p>{Students.length==0&&"Students Not Found"}</p>
            {/*3rd */}
            <p>{!Boolean(Students.length) && "Students Not Found"}</p>
            <p>No of Students :{Students.length}</p> 
        </>
    );
}
export default Pratice;