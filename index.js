let numberOfFilms;

start();

function start() {
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("How many movies did you alredy saw?", "");
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false
};

rememberMyFilms();

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const movie = prompt("Name one of the recent movies you saw:", "");
    const rate = +prompt("Rate this movie from 1 to 5:");

    if (movie != null && rate != null && movie != '' && rate != '' && movie.length < 50) {
      personalMovieDB.movies[movie] = rate;
    } else {
      i--;
    }
  }
}

detectPersonalLevel();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log(`You saw small number of movies`);
  } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log(`You are classic audience`);
  } else {
    console.log(`You are fun of movies`);
  }
}

showMyDB();

function showMyDB() {
  if (personalMovieDB.private) {
    console.log(personalMovieDB);
  }
}

writeYourGenres();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Your favorite genre by number ${i}`, '');

    if (genre != null && genre != '' && isNaN(genre)) {
      personalMovieDB.genres[i - 1] = genre;
    } else {
      i--;
    }
  }
}

