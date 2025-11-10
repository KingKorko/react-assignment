import React, { useState } from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import AccessTime from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Language from "@mui/icons-material/Language";
import Navigation from "@mui/icons-material/Navigation";
import MovieReviews from "../movieReviews";

  {/* Assignment Additions - Same general layout as movieDetails from the labs.
   Added a language chip to display the original language of the movie.
   Everything else is just style changes.*/}

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const Card = (props) => <Paper sx={{ p: 2, m: "10px", borderRadius: 3, background: "rgba(248, 248, 248, 0.7)"}} {...props} />;

  return (
    <>
      <Card>
        <Typography variant="h4" fontWeight={800}>{movie.title}</Typography>
        {movie.tagline && <Typography variant="h6" fontStyle="italic">“{movie.tagline}”</Typography>}
        <Typography variant="body1" mt={2} lineHeight={1.6}>{movie.overview}</Typography>
      </Card>

      <Card>
        <Chip label="Genres" color="primary"/>
        {movie.genres.map((g) => <Chip key={g.id} label={g.name}/>)}
      </Card>

      <Card>
        <Chip icon={<AccessTime />} label={`${movie.runtime || "?"} min`}/>
        <Chip icon={<MonetizationIcon />} label={`${movie.revenue.toLocaleString()}`}/>
        <Chip icon={<StarRate />} label={`${movie.vote_average} (${movie.vote_count})`}/>
        <Chip icon={<Language />} label={movie.original_language.toUpperCase()}/>
        <Chip label={`Released: ${movie.release_date}`}/>
      </Card>

      <Card>
        <Chip label="Production Countries" color="primary" />
        {movie.production_countries.map((g) => <Chip key={g.name} label={g.name}/>)}
      </Card>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{ position: "fixed", top: 145, right: 60 }}
      >
        <Navigation sx={{ mr: 1 }} /> Reviews
      </Fab>

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ p: 2 }}>
          <MovieReviews movie={movie} />
        </Box>
      </Drawer>
    </>
  );
};

export default MovieDetails;
