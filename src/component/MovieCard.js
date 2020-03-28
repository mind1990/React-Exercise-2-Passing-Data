import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { users, usersWhoLikedMovie, movieInfo } = this.props;
    
    return (
      <li key={movieInfo.id}>
		<h2>{movieInfo.name}</h2>
		<h3>Liked by:</h3>

		{!usersWhoLikedMovie || usersWhoLikedMovie.length === 0 ? (
         <p>No one likes this movie yet.</p>
         ) : (
           <ul>
             {usersWhoLikedMovie && usersWhoLikedMovie.map(userID => {
                return (
                    <li key={userID}>
                        <p>{users[userID].name}</p>
                    </li>
                );
              })}
         	</ul>
		)}
	  </li>
    )
   }
}
  
export default MovieCard;