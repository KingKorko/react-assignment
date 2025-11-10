import React from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";

 {/* Assignment Additions - Same code as the movies labs but added style and layout changes*/}

const MovieHeader = () => {
  const navigate = useNavigate();

  return (
    <Paper
      elevation={4}
      sx={{
        width: "fit-content",
        mx: "auto",
        mt: 1,
        borderRadius: 100,
        background: "rgba(204, 90, 198, 0.75)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <IconButton aria-label="go back" size="small" onClick={() => navigate(-1)}>
          <ArrowBackIcon fontSize="small" color="black" />
        </IconButton>

        <IconButton aria-label="home" size="small" onClick={() => navigate("/")}>
          <HomeIcon fontSize="small" color="black" />
        </IconButton>

        <IconButton aria-label="go forward" size="small" onClick={() => navigate(1)}>
          <ArrowForwardIcon fontSize="small" color="black" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default MovieHeader;
