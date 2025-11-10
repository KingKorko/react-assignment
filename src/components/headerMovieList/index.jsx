import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

 {/* Assignment Additions - Same code as the movies labs but added style and layout changes*/}

const Header = (props) => {
  const title = props.title;
  const navigate = useNavigate();

  return (
    <Paper
      elevation={4}
      component="div"
      sx={{
        width: "fit-content",
        mx: "auto",
        py: 0.5,
        borderRadius: 100,
        background: "rgba(96, 33, 168, 0.75)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center"}}>
        <IconButton aria-label="go back" size="small" onClick={() => navigate(-1)}>
          <ArrowBackIcon fontSize="small" color="black" />
        </IconButton>

        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, px: 0.75 }}>
          {title}
        </Typography>

        <IconButton aria-label="go forward" size="small" onClick={() => navigate(+1)}>
          <ArrowForwardIcon fontSize="small" color="black" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Header;
