import React from "react";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";
import img from "../../images/film-poster-placeholder.png";


  {/* Assignment Additions - This gets the first eight recommendations
    of a movie by mapping recommendations?.results, also getting the movie
    poster + release year and it then displays them*/}

export default function Recommendations({ recommendations }) {
  const items = (recommendations?.results || recommendations || []).slice(0, 8);

  return (
    <Box>
      <Paper elevation={3} sx={{ p: 2, mb: 3, mt:3, borderRadius: 100, background: "rgba(248,248,248,.7)", textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700}>Recommendations</Typography>
      </Paper>

      <Grid container spacing={2} justifyContent="center">
        {items.map(recom => (
          <Paper
            elevation={3}
            sx={{px: 2, py: 1.5, display: "flex", alignItems: "center", gap: 2,
              borderRadius: 100, background: "rgba(255,255,255,.9)",}}
          >
            <Avatar
              alt={recom.title}
              src={recom.poster_path ? `https://image.tmdb.org/t/p/w500/${recom.poster_path}` : img}
              sx={{ width: 60, height: 60, borderRadius: "50%" }}
            />
            <Box minWidth={0}>
              <Typography variant="subtitle1" noWrap fontWeight={700}>
                {recom.title}
              </Typography>
              <Typography variant="subtitle2" noWrap color="text.secondary">
                {(recom.release_date).slice(0, 4)}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Grid>
    </Box>
  );
}
