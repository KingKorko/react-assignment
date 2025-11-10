import React from "react";
import { useParams } from 'react-router';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getCredits, getRecommendations } from '../api/tmdb-api';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import Credits from "../components/credits";
import Recommendations from "../components/recommendations";

 {/* Assignment Additions - Same as the movie labs, just added error checks
  for credits and recommendations.*/}

const MoviePage = () => {
  const { id } = useParams();

  const { data: movie, isLoading: isMovieLoading, isError: isMovieError, error: movieError } = useQuery({
    queryKey: ['movie', { id }],
    queryFn: getMovie,
  });

  const { data: credits, isError: isCreditsError, isLoading: isCreditsLoading, error:creditsError } = useQuery({
    queryKey: ['credits', { id }],
    queryFn: getCredits,
  });

  const { data: recommendations, isError: isRecommendationsError, isLoading: isRecommendationsLoading, error: recommendationsError } = useQuery({
    queryKey: ['recommendations', { id }],
    queryFn: getRecommendations,
  });

  if (isMovieLoading) return <Spinner/>;
  if (isMovieError) return <h1>{movieError.message}</h1>;

    if (isCreditsLoading) return <Spinner/>;
  if (isCreditsError) return <h1>{creditsError.message}</h1>;

    if (isRecommendationsLoading) return <Spinner/>;
  if (isRecommendationsError) return <h1>{recommendationsError.message}</h1>;

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          {credits && <Credits credits={credits} />}
          {recommendations && <Recommendations recommendations={recommendations} />}
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;