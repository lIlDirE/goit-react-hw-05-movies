import Header from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';

export const App = () => {
  return (
	<>
	<Header />
    <Routes>
	  <Route path="/" element={<Home />} />
	  {/* <Route path="/movies/:postId" element={<MovieDetails />} /> */}
	  <Route path="/movies/:postId"  element={<MovieDetails />} />
    </Routes>
	</>
  );
};