import { useEffect, useState } from 'react';
import { fetchMovies } from 'api/fetchMovies';
import MoviesList from 'components/MoviesList/MoviesList';
const Home = () => {
  const [fetchData, setFetchData] = useState('');

  useEffect(() => {
     fetchMovies()
      .then(fetch => fetch.json())
      .then(data => {
		if(data){
			setFetchData(data)
		}
	  }
	);
  }, []);

  return <MoviesList fetchData={fetchData} />;
};

export default Home;
