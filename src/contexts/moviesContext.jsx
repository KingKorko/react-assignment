import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

 {/* Assignment Additions - Added add and remove to playlist.*/}

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
    const [myReviews, setMyReviews] = useState( {} )
    const [mustWatch, setMustWatch] = useState( [] ) 
    


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };
  
  
  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  console.log(myReviews);

    const addToPlaylist = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setMustWatch(newMustWatch)
  };

    const removeFromPlaylist = (movie) => {
      setMustWatch(mustWatch.filter(
        (mId) => mId !== movie.id));
    };

  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        playlists: mustWatch,
        removeFromFavorites,
        removeFromPlaylist,
        addReview,
        addToPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
