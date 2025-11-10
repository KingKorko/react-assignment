import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromPlaylists from "../components/cardIcons/removeFromPlaylists";

const PlaylistMoviesPage = () => {
  const { playlists: movieIds = [] } = useContext(MoviesContext);

  const playlistMovieQueries = useQueries({
    queries: movieIds.map((movieId) => ({
      queryKey: ["movie", { id: movieId }],
      queryFn: getMovie,
    })),
  });

  const isPending = playlistMovieQueries.some((q) => q.isPending);

   if (isPending) {
     return <Spinner />;
   }

 
   const movies = playlistMovieQueries.map((q) => {
     q.data.genre_ids = q.data.genres.map(g => g.id)
     return q.data
   });

  return (
    <PageTemplate
      title="Movie Playlist"
      movies={movies}
      action={(movie) => (
        <>
          <RemoveFromPlaylists movie={movie} />
          <WriteReview movie={movie} />
        </>
      )}
    />
  );
};

export default PlaylistMoviesPage;
