const numberOfFilms = +prompt("How many movies did you alredy saw?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

const a = prompt("Name one of the recent movies you saw:", ""),
      b = +prompt("Rate this movie from 1 to 5:"),
      c = prompt("Name one of the recent movies you saw:", ""),
      d = +prompt("Rate this movie from 1 to 5:");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
