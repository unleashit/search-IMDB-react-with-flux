var React = require('React');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');
var Movie = require('./movie');

var MovieResults = React.createClass({

    render: function() {
        var movies = this.props.movies;
        movies = movies.length ? movies.map((movie, i) => {
            return <Movie movie={movie} key={i} />
        }) : 'No results found.';

        return (
            <div className="movie">
                <h3 className="text-center">Results</h3>
                {movies}
            </div>
        )
    }
});

module.exports = MovieResults;