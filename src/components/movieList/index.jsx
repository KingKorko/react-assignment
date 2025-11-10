import React from "react";
import Movie from "../movieCard/";
import Grid from "@mui/material/Grid";

  {/* Assignment Additions - Same general layout as movieDetails from the labs.
   Added a language chip to display the original language of the movie.
   Everything else is just style changes.*/}

const MovieList = (props) => {
  let movieCards = props.movies.map((m) => (
    <Grid key={m.id} size={{xs: 12, sm: 6, md: 4, lg: 3, xl: 2}} sx={{padding: "20px"}}>
                <Movie key={m.id} movie={m} action={props.action} />


    </Grid>
  ));
  return movieCards;
};

export default MovieList;
