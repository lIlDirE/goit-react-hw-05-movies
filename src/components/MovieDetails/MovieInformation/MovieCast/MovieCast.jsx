import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api/fetchMovies';

const MovieReview = () => {
  const [fetchData, setFetchData] = useState({});
  const idMovie = useParams();

  useEffect(() => {
    fetchMovieCast(idMovie)
      .then(data => data.json())
      .then(credits => setFetchData(credits.cast));
  }, [idMovie, fetchData]);

  return (
    Object.keys(fetchData).length !== 0 &&
    fetchData.map(creditsItem => {
      return (
        <div key={creditsItem.id}>
          <p>{creditsItem.original_name}</p>
          {(creditsItem.profile_path !==null &&(
            <img
            src={`https://image.tmdb.org/t/p/w500${creditsItem.profile_path}`}
            alt={creditsItem.title}
          />
          ))}
        </div>

      );
    })
  );
};

export default MovieReview;
