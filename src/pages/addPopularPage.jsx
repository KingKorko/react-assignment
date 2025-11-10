import React from "react";
import { getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const popularPage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['popular'],
    queryFn: getPopularMovies,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))

  
  return (
    <PageTemplate
      title=" Popular Movies"
      movies={movies}
      action={(movie) => {
      }}
    />
  );

};

export default popularPage;
