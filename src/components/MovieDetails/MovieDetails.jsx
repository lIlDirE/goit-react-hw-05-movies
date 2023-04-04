import { useEffect,  useState } from 'react';
import {  useParams } from 'react-router-dom';
import {fetchNewsMovie} from 'api/fetchMovies';

const MovieDetails = () => {
	const [movies, setMovies] = useState({});
	const idMovie = useParams();
	// const location = useLocation();
	// const navigate = useNavigate();
	// const backLinkHref = useRef(location?.state?.from ?? '/');


useEffect(() => {
	fetchNewsMovie(idMovie).then(movie => movie.json()
	).then(data => {
		if(data){
			setMovies(data)
			console.log(data);
		}
	  })
}, [idMovie])

return(
	<div>
	<div>
	  <img
		src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
		alt=""
	  />
	  <div>
		<div>
		  <h2>{movies.title}</h2>
		  <p>User Schore: {(movies.vote_average * 10).toFixed()}%</p>
		</div>
		<div>
		  <strong>Overview</strong>
		  <p>{movies.overview}</p>
		</div>
		<div
		  style={{ display: 'flex', justifyContent: 'space-between' }}
		>
		  <div>
			<strong>Genres</strong>
			{/* <p>{movies.genres.map(genre => genre.name).join(', ')}</p> */}
		  </div>
		</div>
		{/* <MovieInformation /> */}
	  </div>
	</div>
	{/* <Suspense fallback={<Loader />}>
	  <Outlet />
	</Suspense> */}
  </div>
)
};

export default MovieDetails;
