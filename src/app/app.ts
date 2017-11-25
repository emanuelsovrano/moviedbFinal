import '../css/index.less';
import 'bootstrap';
// import * as _ from 'lodash';
import 'less';
import createModel from './movie-model';

import {apiKey} from './constants';
import {showDetails} from './movie-details/movie-details';

const $searchInput = $('#search-input');
const $search = $('#search-bar');
const $searchBtn = $('#search-btn');

$searchInput.on('blur', doSearch);
$search.on('submit', doSearch);
$searchBtn.on('click', doSearch);

const model = createModel();

function renderMovies() {

    const $resultList = $('#result');
    $resultList.html('');
    for (const movie of model.movieList) {
        $('<li>')
            .appendTo($resultList)
            .addClass('list-group-item')
            .text(movie.title)
            .append(
                $('<button>')
                    .text('>')
                    .on('click', () => showDetails(model.getMovie(movie.id)))
            );
    }
}

function doSearch() {
    const query = $searchInput.val();
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;

    model.resetMovieList();

    $.get(url, (data) => {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}

$(model).on('modelchange', () => {
    renderMovies();
});

function prepareUI() {
    const formsNodeList = document.querySelectorAll('form');

    for (let i = 0; i < formsNodeList.length; i++) {
        formsNodeList[i].addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }
}

prepareUI();
