import { useEffect, useState, useRef } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchNewsMovie } from 'api/fetchMovies';
import MovieCast from './MovieInformation/MovieCast/MovieCast';
import MovieReview from './MovieInformation/MovieReview/MovieReview';

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
    <div>
      <div>
        <button
          onClick={() => {
            navigate(returnLink.current);
          }}
        >
          return
        </button>
      </div>
      {Object.keys(movies).length !== 0 && (
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <strong>Genres</strong>
                <p>{movies.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </div>
            <div>
              <Link onClick={renderReviews} to={'reviews'}>Reviews</Link>

              <Link onClick={renderCast} to={'cast'}>Cast</Link>
            </div>

            <div>
              {showReview && <MovieReview />}
              {showCast && <MovieCast />}
            </div>
          </div>
        </div>
        // {/* <Suspense fallback={<Loader />}>
        //   <Outlet />
        // </Suspense> */}
      )}
    </div>
  );
};

export default MovieDetails;
