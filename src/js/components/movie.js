var React = require('React');
var AppActions = require('../actions/appActions');
var AppStore = require('../stores/appStore');

var Movie = React.createClass({
    render: function() {

        var link = 'http://www.imdb.com/title/' + this.props.movie.imdbID;

        return (
            <div className="well">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.movie.Poster} alt="" className="thumbnail" />
                    </div>
                    <div className="col-md-8">
                        <h4>{this.props.movie.Title}</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Year Released: {this.props.movie.Year}</li>
                            <li className="list-group-item">Actors: {this.props.movie.Actors}</li>
                            <li className="list-group-item">Awards: {this.props.movie.Awards}</li>
                            <li className="list-group-item">Director: {this.props.movie.Director}</li>
                            <li className="list-group-item">Rated: {this.props.movie.Rated}</li>
                            <li className="list-group-item">Metascore: {this.props.movie.Metascore}</li>
                            <li className="list-group-item">Plot: {this.props.movie.Plot}</li>
                        </ul>
                        <a href={link} className="btn btn-primary">View on IMDB</a>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Movie;