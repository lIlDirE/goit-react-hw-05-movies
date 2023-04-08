import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ fetchData, state}) => {
  const location = useLocation();
  let listArr = [];
  if (fetchData) {
    listArr = fetchData.results;
  }

  return (

        listArr.map(trending => {
          return (
            <li key={trending.id}>
              <Link
                to={`${location.pathname !== `/movies` ? `/movies/` : ``}${
                  trending.id
                }`}
                state={{ from: state }}
              >
                {trending.overview}
                <p>{trending.title}</p>
              </Link>
            </li>
          );
        })

  );
};

export default MoviesList;
