import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ fetchData }) => {
	
  const location = useLocation();

  let listArr = [];
  if (fetchData) {
    listArr = fetchData.results;
  }

  return listArr.map(trending => {
	return (
    <li key={trending.id}>
      <Link to={`movies/${trending.id}`} state={{ from: location }}>
        {trending.overview}
        {/* <img
          src={`https://image.tmdb.org/t/p/w500${trending.backdrop_path}`}
          alt={trending.title}
        /> */}
        <p>{trending.title}</p>
      </Link>
    </li>
  )});
};

export default MoviesList;


