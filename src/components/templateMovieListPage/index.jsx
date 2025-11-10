import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import bg from "../../images/ShowroomWeb.png";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);
  const [page, setPage] = useState(1);
  const perPage = 11;

  let displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    });
    
     {/* Assignment Additions - Same general layout as templateMovieListPage from the labs but changed 
      colour scheme and some layout changed.
      Also added pagination so only 11 movies show per page, with total pages based on the filters. */}

  const totalPages = Math.max(1, Math.ceil(displayedMovies.length / perPage));
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const paginatedMovies = displayedMovies.slice(start, end);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
    setPage(1);
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <Grid
        container
        sx={{ p: { xs: 1.5, md: 2 }, position: "relative", mx: "auto" }}
      >
        <Grid size={12} sx={{ mb: 2 }}>
          <Box
            sx={{
              borderRadius: 3,
              textAlign: "center",
            }}
          >
            <Header title={title} />
          </Box>
        </Grid>

        <Grid
          container
          sx={{
            flex: "500px",
            position: "relative",
            background: "linear-gradient(rgba(111, 15, 114, 0.9) 0%, rgba(185, 58, 134, 0.85) 100%)",
            backdropFilter: "blur(6px)",
            borderRadius: 8,
          }}
        >
          <Grid
            key="find"
            size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
            sx={{ p: { xs: 1.5, md: 2 } }}
          >
            <FilterCard
              onUserInput={handleChange}
              titleFilter={nameFilter}
              genreFilter={genreFilter}
            />
          </Grid>

          <MovieList action={action} movies={paginatedMovies} />

          <Grid
            size={{ xs: 12 }}
            sx={{ display: "flex", justifyContent: "center", py: 2 }}
          >
            <Pagination
              count={totalPages}
              page={page}
              onChange={(_, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MovieListPageTemplate;
