import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css'

const MoviesList = ({ fetchData, state }) => {

  const location = useLocation();
  let listArr = [];
  if (fetchData) {
	// console.log(fetchData.results);
	// console.log(state);
    listArr = fetchData.results;
  }
 
  return (
	
	<ul className={css.trendingWrap}>
{listArr.map(trending => (
				  <Link key={trending.id}
				  to={`${location.pathname !== `/movies` ? `/movies/` : ``}${trending.id}`}
				  state={{ search: state}}
				>
		<li  className={css.trendingLi}>
			<div className={css.trendingImage}>
			  {trending.backdrop_path !== null ? (
				<img src={`https://image.tmdb.org/t/p/w500${trending.backdrop_path}`} alt={trending.title} />
			  ) : (
                <img
                className={css.creditsImg}
                src="https://www.smaroadsafety.com/wp-content/uploads/2022/06/no-pic.png"
                alt={trending.title}
              />
              )}
			</div>
			<div className={css.trendingTitle}>
			  {trending.title}
  			</div>
			<div className={css.trendingOverview}>
			<p className={css.trendingP}>{trending.overview}</p>
			</div>
		</li>
		</Link>
	  ))}
	</ul>
  );
};

export default MoviesList;
