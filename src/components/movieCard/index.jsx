import React, {useContext} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistIcon from "@mui/icons-material/PlaylistAdd";
import StarRateIcon from "@mui/icons-material/StarRate";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router";
import { MoviesContext } from "../../contexts/moviesContext";
import img from "../../images/film-poster-placeholder.png";

  {/* Assignment Additions - Same general layout as movieCard from the labs.
    I just added layout and style changes and changed the favourite and playlist buttons.
    I used isFav and isPlay to disable the buttons once clicked so that they can be clicked  
    once for each movie, also so that users can see which movies they have favorited.
    */}

export default function MovieCard({ movie, action }) {
  
  const { favorites, addToFavorites, playlists, addToPlaylist } = useContext(MoviesContext);

  const isFav = favorites.includes(movie.id);
  const isPlay = playlists.includes(movie.id);

  const year = movie.release_date?.slice(0, 4);
  const rating = Number(movie.vote_average || 0).toFixed(1);
  const lang = (movie.original_language || "").toUpperCase();

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    if (!isFav) addToFavorites(movie);
  };

   const handleAddToPlaylist = (e) => {
    e.preventDefault();
    if (!isPlay) addToPlaylist(movie);
  };

  return (
    <Card
      elevation={2}
      sx={{
        mx: 0.5,
        borderRadius: 3,
        overflow: "hidden",
        background:  "linear-gradient(90deg, rgba(111, 69, 112, 0.9) 0%, rgba(168, 28, 110, 0.85) 100%)",
        boxShadow: "0 3px 12px rgba(0,0,0,0.08)",
        transition: "transform .18s ease, box-shadow .18s ease",
      }}
    >
      <CardHeader
        sx={{ pb: 0.5 }}
        avatar={isFav ? (
          <Avatar sx={{ bgcolor: "error.main" }}><FavoriteIcon /></Avatar>
        ) : null}
        action={
          <Tooltip>
            <span>
              <IconButton
                aria-label="favorite"
                onClick={handleAddToFavorite}
                disabled={isFav}
                color={isFav ? "error" : "default"}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                aria-label="playlist"
                onClick={handleAddToPlaylist}
                disabled={isPlay}
                color={isPlay ? "error" : "default"}
              >
                <PlaylistIcon />
              </IconButton>
            </span>
          </Tooltip>
        }
        title={
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              lineHeight: 1.1,
            }}
          >
            {movie.title}
          </Typography>
        }
        subheader={<Typography variant="body2" color="text.secondary">{year}</Typography>}
      />

      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="400"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : img
          }
          alt={movie.title}
        />
        <Chip
          icon={<StarRateIcon />}
          label={rating}
          color="warning"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(0, 0, 0, 0.95)",
            "& .MuiChip-icon": { color: "#f5a524" },
          }}
        />
      </Box>

      <CardContent sx={{ pt: 1.5 }}>
        <Grid container spacing={1}>
          <Grid xs={6}>
          </Grid>
          <Grid xs={6} sx={{ textAlign: "right" }}>
            <Typography variant="subtitle2" color="text.secondary" noWrap>
              <LanguageIcon fontSize="small" />{" "}{lang}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

    {action(movie)}

      <CardActions>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="contained" size="small" color="primary" sx={{ borderRadius: 2 }}>
            More Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
