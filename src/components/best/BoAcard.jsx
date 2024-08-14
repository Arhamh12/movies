import react from 'react';
import { Link } from 'react-router-dom'
import { LiaStarSolid } from 'react-icons/lia';
import './BestOfAction.css'


export default function BoAcard(prop){
    const rating = prop.Movie.vote_average.toFixed(1);

    return(
        <>
        <div className='card'>
            <Link to={`/movies/${prop.Movie.id}`}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/original${prop.Movie.backdrop_path}`}></img>
                </div>
            </Link>
            <h6 className='TitleName'> {prop.Movie.title}</h6>
                    <div className="rate">
                        <LiaStarSolid 
                        fill='rgb(255, 215, 0'
                        className='star'
                        size={30}
                        />
                        <div>{rating}</div>
                </div>
        </div>
        </>
    )
}