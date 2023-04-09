// import Header from './Header/Header';
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Layout = lazy(() => import('./Layout/Layout'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./MovieDetails/MovieInformation/MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieDetails/MovieInformation/MovieReview/MovieReview'));


export const App = () => {
  return (
    <>
      <Routes>
	  <Route path="/" element={<Layout />}> 
			<Route index element={<Home />} />
			<Route path="/movies" element={<Movies />} />
			<Route path="/movies/:postId" element={<MovieDetails />}>
				<Route path="cast" element={<MovieCast />} />
				<Route path="reviews" element={<MovieReview />} />
			</Route>
		</Route>
      </Routes>
    </>
  );
};