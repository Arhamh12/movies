import { react } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoT from './imgs/MoT.jpg'
import MovieCard from './MovieCard';
import { PacmanLoader } from 'react-spinners';


export default function BestOfAction (prop) {
    
    return(
        <>
        <div className='sec-name'>top rated</div>
        <div className="mainBody">
            {prop.loads ? (
                <PacmanLoader
                color={'#123abc'}
                loading={prop.loads}
                size={50}
                />
            )
            : 
              prop.movie?.map((item)=>(
            <div key={item.id}>
            <MovieCard Movie={item}/>   
            </div>))}
   
        </div>
        </>
    )
}