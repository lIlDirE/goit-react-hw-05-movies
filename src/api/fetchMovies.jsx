const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=4761bb7849595ee4cbf0e7a5e7d7ab74';

export async function fetchMovies() {
  const info = await fetch(`${BASE_URL}/trending/movie/day${API_KEY}`);
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

export async function fetchMovieReviews(idMovie) {
  const info = await fetch(`${BASE_URL}/movie/${idMovie.postId}/reviews${API_KEY}&language=en-US&page=1`);
  if (info.status === 200) {
    return info;
  }
}

export async function fetchMovieCast(idMovie) {
  const info = await fetch(`${BASE_URL}/movie/${idMovie.postId}/credits${API_KEY}&language=en-US&page=1`);
  if (info.status === 200) {
    return info;
  }
}

export async function fetchSearchMovie(search) {
  const info = await fetch(`${BASE_URL}/search/movie${API_KEY}&query=${search}`);
  if (info.status === 200) {
    return info;
  }
}