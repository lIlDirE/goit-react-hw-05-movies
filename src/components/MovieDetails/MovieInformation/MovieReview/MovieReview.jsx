import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/fetchMovies';

const MovieReview = () => {
    const [fetchData, setFetchData] = useState({});
    const idMovie = useParams();
  
    useEffect(() => {
      fetchMovieReviews(idMovie)
        .then(data => data.json())
        .then(reviews => setFetchData(reviews.results));
    }, [idMovie]);

    return (
        Object.keys(fetchData).length !== 0 &&
        fetchData.map(reviewItem => {
          return (
            <div key={reviewItem.id}>
              <h3>{reviewItem.author}</h3>
              <p>{reviewItem.content}</p>
              <p>{reviewItem.updated_at}</p>
            </div>
          );
        })
      );
}

export default MovieReview