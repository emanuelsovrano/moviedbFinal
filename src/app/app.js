import '../css/index.less';
import 'bootstrap';
import * as _ from 'lodash';
import 'less';
import model from './movie-model';

import {apiKey} from "./constants";
import {showDetails} from './movie-details/movie-details';

const $searchInput = $('#search-input');
const $search = $('#search-bar');
const $searchBtn = $('#search-btn');

$searchInput.on('blur', doSearch);
$search.on('submit', doSearch);
$searchBtn.on('click', doSearch);

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
                    .on('click', () => showDetails(movie.id))
            );
    }
}

function doSearch() {
    const query = $searchInput.val();
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&query=' + query;

    model.resetMovieList();

    $.get(url, function (data) {
        const movies = data.results;
        for (const movie of movies) {
            model.addMovie(movie);
        }
    });
}

$(model).on('modelchange', () => {
    renderMovies();
});

function prepareUI () {
    var formsNodeList = document.querySelectorAll('form');

    for (var i = 0; i < formsNodeList.length; i++) {
        formsNodeList[i].addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }
}


prepareUI();
