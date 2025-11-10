import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getMovieImages } from "../../api/tmdb-api";
import Spinner from "../spinner";

const bg_img = "https://image.tmdb.org/t/p";
const bg_size = "original";

const TemplateMoviePage = ({ movie, children }) => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["images", { id: movie.id }],
    queryFn: getMovieImages,
  });

  if (isPending) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  const images = data?.posters ?? [];
  const bgPath = movie.poster_path;
  const bgUrl = bgPath ? `${bg_img}/${bg_size}${bgPath}` : "";

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage: bgUrl ? `url(${bgUrl})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <Box sx={{ position: "relative" }}>
        <MovieHeader movie={movie} />

        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              elevation={3}
              sx={{
                p: 1,
                borderRadius: 3,
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ImageList sx={{ height: "80vh" }} cols={1} gap={8}>
                {images.map((image) => (
                  <ImageListItem key={image.file_path}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={image.file_path}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 1.5, md: 2 },
                borderRadius: 3,
                background: "rgba(223, 214, 214, 0.75)",
              }}
            >
              {children}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TemplateMoviePage;
