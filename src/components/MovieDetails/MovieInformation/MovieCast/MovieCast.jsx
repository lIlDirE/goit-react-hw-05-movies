import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/fetchMovies';
import css from './MovieCast.module.css'

const MovieReview = () => {
  const [fetchData, setFetchData] = useState({});
  const idMovie = useParams();

  useEffect(() => {
    fetchMovieCast(idMovie)
      .then(data => data.json())
      .then(credits => setFetchData(credits.cast));
  }, [idMovie, fetchData]);

  return (
    <div className={css.credits}>
      {Object.keys(fetchData).length !== 0 &&
        fetchData.map(creditsItem => {
          return (
            <div className={css.creditsItem} key={creditsItem.id}>
              <p className={css.creditsName}>{creditsItem.original_name}</p>
              {creditsItem.profile_path !== null ? (
                <img
                  className={css.creditsImg}
                  src={`https://image.tmdb.org/t/p/w500${creditsItem.profile_path}`}
                  alt={creditsItem.title}
                />
              ) : (
                <img
                className={css.creditsImg}
                src="https://www.smaroadsafety.com/wp-content/uploads/2022/06/no-pic.png"
                alt={creditsItem.title}
              />
              )}
            </div>
          );
        })}
    </div>
  );
  
};

export default MovieReview;
