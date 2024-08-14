import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Movie.css'

export default function SingleMovie() {

  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const options = { method: "GET" };
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=01947fdc028668cbba608f3d08618bef&language=en-US`
      , options
    )
      .then((res) => res.json())
      .then((res) => setMovie(res))
  }, [])

  console.log(movie, "mooooive")
  return (
    <>
    <div className="body">
      <div className='main'>
        <div className='movieImg'>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            width={'100%'}
            height={'100%'}

          />
        </div>
        <div className="MovieInfo">
          <div className="movieTitle">
            <h1>{movie.title}</h1>
            <h1>INFO</h1>
          </div>
          <div className='movieDesc'>
            <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}