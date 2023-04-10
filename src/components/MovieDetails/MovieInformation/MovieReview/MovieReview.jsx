import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/fetchMovies';
import css from './MovieReview.module.css'

const MovieReview = () => {
    const [fetchData, setFetchData] = useState({});
    const idMovie = useParams();
  
    useEffect(() => {
      fetchMovieReviews(idMovie)
        .then(data => data.json())
        .then(reviews => setFetchData(reviews.results));
    }, [idMovie]);

    return (
      <div className={css.reviews}>
        {Object.keys(fetchData).length !== 0 &&
          fetchData.map(reviewItem => {
            return (
              <div className={css.reviewItem} key={reviewItem.id}>
                <h3 className={css.reviewAuthor}>{reviewItem.author}</h3>
                <p className={css.reviewContent}>{reviewItem.content}</p>
                <p className={css.reviewDate}>{reviewItem.updated_at}</p>
              </div>
            );
          })}
      </div>
    );
}

export default MovieReview