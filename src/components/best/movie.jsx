import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleMovie(){

    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const options = {method: "GET"};
        fetch(
            `https://api.themoviedb.org/3/movie/${ id }?api_key=01947fdc028668cbba608f3d08618bef&language=en-US`
            ,options
            )
            .then((res) => res.json())
            .then((res) => setMovie(res))
    }, [])

console.log(movie,"mooooive")
    return(
        <>
        <div>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}></img>
        </div>
        <div>
            <p>{movie.overview}</p>
        </div>

        </>
    )
}