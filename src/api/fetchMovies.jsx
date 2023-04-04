//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

const BASE_URL = 'https://api.themoviedb.org/3/';
const media_type = 'movie/';
const section = 'trending/'
const time_window = 'day';

const API_KEY = '?api_key=4761bb7849595ee4cbf0e7a5e7d7ab74';
const full_home_request =
  BASE_URL + section + media_type + time_window + API_KEY;
  

export async function fetchMovies() {
  const info = await fetch(`${full_home_request}`);

  if (info.status === 200) {
    return info;
  }
}

export async function fetchNewsMovie(idMovie) {
  const info = await fetch(`${BASE_URL}/movie/${idMovie.postId}${API_KEY}`);

  if (info.status === 200) {
    return info;
  }
}
