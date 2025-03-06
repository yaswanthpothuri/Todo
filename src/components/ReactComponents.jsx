import NetCard,{Footer} from './NetCard.jsx'
import SeriesData from '../api/SeriesData.json'
const ReactComponents=()=>{
    return (
        <>
        <div className='container'>

        <h1>Top 10 best netflix series</h1>
         <ul className='grid '>
            {
                SeriesData.map(
                    (CurrentElem)=> <NetCard key={CurrentElem.id} currentElem={CurrentElem} />
                )
            }
         </ul>
        </div>
        </>
    );
}

export default ReactComponents;