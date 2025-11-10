
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import CategoryIcon from "@mui/icons-material/Category";
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../api/tmdb-api";
import Spinner from "../spinner";
import img from "../../images/NewFilterPhoto.jpg";

 {/* Assignment Additions - Same code as the movies labs but added style and layout changes*/}

const formControl = {
  margin: 1,
  minWidth: "90%",
  borderRadius: 100,
};

export default function FilterMoviesCard(props) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }
  
  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); 
  };

    const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  return (
    <Card
      sx={{
   background: "linear-gradient(90deg, rgba(159, 165, 160, 0.9) 0%, rgba(192, 148, 177, 0.85) 100%)",
      }}
    >
      <CardContent sx={{ pb: 1 }}>
        <Typography
          variant="h5"
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <SearchIcon color="black" /> Filter Movies
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Search for a movie by title/genre to filter.
        </Typography>
      </CardContent>

      <Divider />

      <Box>
        <TextField
          sx={{ mb: 2, ...formControl }}
          id="filled-search"
          label="Search Movies"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />

        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">
            <CategoryIcon color="black" fontSize="small"/>
            Genre
          </InputLabel>
         <Select
            labelId="genre-label"
            id="genre-select"
            label="Genre"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

   <CardMedia sx={{ height: 300 }} image={img}/>

    </Card>
  );
}
