import { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchNewsMovie } from 'api/fetchMovies';
import MovieCast from './MovieInformation/MovieCast/MovieCast';
import MovieReview from './MovieInformation/MovieReview/MovieReview';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movies, setMovies] = useState({});
  const idMovie = useParams();
  const [showReview, setShowReview] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const returnLink = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    fetchNewsMovie(idMovie)
      .then(movie => movie.json())
      .then(data => {
        if (data) {
          setMovies(data);
        }
      });
  }, [idMovie, showReview, showCast]);

  const renderReviews = () => {
    setShowCast(false);
    setShowReview(!showReview);
  };

  const renderCast = () => {
    setShowReview(false);
    setShowCast(!showCast);
  };

  return (
	<div className="movie-details">
	  <div>
		<button
		  className="back-button"
		  onClick={() => {
			navigate(returnLink.current);
		  }}
		>
		  Return
		</button>
	  </div>
	  {Object.keys(movies).length !== 0 && (
		<div className={css.movieInfo}>
			<div>
			<img
			className={css.poster}
			src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
			alt=""
		  />
			</div>

		  <div className={css.details}>
			<div className={css.title}>
			  <h2>{movies.title}</h2>
			  <p className={css.score}>User Schore: {(movies.vote_average * 10).toFixed()}%</p>
			</div>
			<div className={css.overview}>
			  <strong>Overview</strong>
			  <p>{movies.overview}</p>
			</div>
			<div className={css.genres}>
			  <strong>Genres</strong>
			  <p>{movies.genres.map(genre => genre.name).join(', ')}</p>
			</div>
			<div className={css.links}>
			  <Link onClick={renderReviews} to={'reviews'}>Reviews</Link>
			  <Link onClick={renderCast} to={'cast'}>Cast</Link>
			</div>
			<div className={css.detailsContainer}>
			  {showReview && <MovieReview />}
			  {showCast && <MovieCast />}
			</div>
		  </div>
		</div>
	  )}
	</div>
  );
  
};

export default MovieDetails;
