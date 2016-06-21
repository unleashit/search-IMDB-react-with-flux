var AppActions = require('../actions/appActions');
var axios = require('axios');

module.exports = {
    searchMovies: function(movie) {
        return axios('http://www.omdbapi.com/', {
            params: {
                s: movie.title
            }
        })
        .then(resp => {
            if (resp.data.Response === "False") throw 'no results found.';

            var imdbUrls = resp.data.Search.map(item => axios.get('http://www.omdbapi.com/?i=' + item.imdbID) );

            return axios.all(imdbUrls)
                .then(axios.spread(function () {
                    var movies = Array.prototype.slice.call(arguments);
                    return movies.map(movie => movie.data);
                    // console.log(movies);
                }))
        })
        .then(movies => {
            AppActions.receiveMovieResults(movies);
        })
        .catch(err => {
            console.log(err);
            AppActions.receiveMovieResults([]);
        })
    }
};