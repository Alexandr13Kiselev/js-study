'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');

alert(`Вы просмотрели ${numberOfFilms} фильмов`);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastViewedFilm;
let movieRait;
let i = 0;


//Задаем по два раза ти вопросы и записываем во вложенный обьект
while (i < 2) {
    lastViewedFilm =  prompt('Один из последних просмотренных фильмов?', '');
    movieRait      = +prompt('Насколько оцените его', '');

    personalMovieDB.movies[lastViewedFilm] = movieRait;
    
    i++;
}

console.log(personalMovieDB);

