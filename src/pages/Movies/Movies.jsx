import { useEffect, useState } from 'react';
import { fetchSearchMovie } from 'api/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';
import { useSearchParams, useLocation} from 'react-router-dom';


const Movies = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useSearchParams('');
  const [fetchObj, setFetcObj] = useState({});
  const searchName = (inputValue.get('query') ?? '').trim();

  useEffect(() => {
    if (inputValue !== '') {
      fetchSearchMovie(searchName)
        .then(data => data.json())
        .then(dataObj => setFetcObj(dataObj));
    }
  }, [inputValue, searchName]);

  function handleChange(e) {
	if(e.target.value.trim() !== ''){
		setInputValue({query: e.target.value.trim()});
	}
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
