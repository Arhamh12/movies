import { react } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoT from './imgs/MoT.jpg';
import MovieCard from './MovieCard';


export default function BoA(prop){

    return(
        <>
        <div className='sec-name'>top rated</div>
        <div className="mainBody">
        {prop.movie?.map((item)=>(
            <div key={item.id}>
            <MovieCard Movie={item}/>

                
            </div>
        ))}
        </div>
        </>
    )
}