import style from "styled-components";

const NetCard =(props)=>{
    const {img_url ,name ,rating ,description ,cast ,genre ,watch_url }=props.currentElem;
    const ratingClass=rating>=8.5?"hit":"average";
    const CardButton=style.button`
        background-color:${rating>=8.5?"#4d924d":"#e6e65c"};
        width:8rem;
        height: 2rem;
         border-radius: 1rem;
    `;
    return(
        <li style={{listStyleType: 'none' }}>
        <div className='con' style={{width:'22rem' ,height:'34rem',padding:'1rem',margin:'1rem' }}>
           <img src={img_url} style={{width:'100%', height:'15rem', objectFit:'fill'}}/>
           <h2>Name:{name}</h2>
           <p> Rating: <span className={`rating ${ratingClass}`}>
            {rating}
            </span></p>
           <p className="text-3xl font-bold underline">Description: {description}</p>
           <p>Cast:{cast.join(", ")}</p>
           <p>Genre:{genre.join(", ")}</p>
           <a href={watch_url}>
          <CardButton>Watch Now</CardButton>
           </a>
       </div>
        </li>
    )
}
export default NetCard;
export  const Footer=()=>{
    return <p> Copyright@NetCard2025</p>
}
