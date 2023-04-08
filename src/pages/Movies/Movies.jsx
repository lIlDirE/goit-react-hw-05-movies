import { useEffect, useState } from 'react';
import { fetchSearchMovie } from 'api/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';
import { useSearchParams, useLocation} from 'react-router-dom';


const Movies = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useSearchParams('');
  const [fetchObj, setFetcObj] = useState({});

  useEffect(() => {
    if (inputValue !== '') {
      fetchSearchMovie(inputValue)
        .then(data => data.json())
        .then(dataObj => setFetcObj(dataObj));
    }
  }, [inputValue]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div className={css.inputContainer}>
        <div className={css.inputSearch}>
          <input
            type="text"
            onChange={handleChange}
            id="movieName"
            name="movieName"
            required
            minLength="4"
            maxLength="8"
            size="10"
          />
        </div>
      </div>

      <div>
        <div className={css.searchResults}>
          <ul>
            {Object.keys(fetchObj).length !== 0 && (
              <MoviesList fetchData={fetchObj} state={location}/>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Movies;
