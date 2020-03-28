import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies, users, usersByMovie } = this.props;
    
    const MovieCards = Object.keys(movies).map(id => (
      
      <MovieCard
      	key={id}            
      	users={users}
      	usersWhoLikedMovie={usersByMovie[id]}
		movieInfo={movies[id]}
      />
    ));
	
	return <ul>{MovieCards}</ul>
	}
}


export default MovieList;