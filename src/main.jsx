import React from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import UpcomingMovies from "./pages/upcomingMovies";
import TrendingMovies from "./pages/trendingMovies";
import TopRatedPage from './pages/topRatedPage'
import PopularPage from './pages/addPopularPage'

 {/* Assignment Additions - Added an import for all new static routes such as Playlist
   Trending, Popular, etc.. Also added two parameterised routes credits + recommendations.*/}


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});




const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/playlist" element={<PlaylistMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMovies />} />
            <Route path="trending/movie/day" element={<TrendingMovies />} />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route path="/movie/top_rated" element={<TopRatedPage />} />
            <Route path="/movie/popular" element={<PopularPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/movies/:id/credits" element={ <MoviePage /> } />
            <Route path="/movies/:id/recommendations" element={<MoviePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={ <Navigate to="/" /> } />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
