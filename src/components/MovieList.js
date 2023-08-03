import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';
import movies from '../data';

const mapStateToProps = movies => {
    return{
        title: movies.title,
        director: movies.director,
        genre: movies.genre,
        metascore: movies.metascore
    }
}

const MovieList = (props)=> {
    const movies = [{...mapStateToProps}];

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}

export default connect(mapStateToProps, {})(MovieList);