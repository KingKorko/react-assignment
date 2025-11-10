import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router";

 {/* Assignment Additions - Same as the labs.*/}

const WriteReviewIcon = ({ movie }) => {
  return (
    <IconButton
      component={Link}
      to={`/reviews/form`}
      state={{ movieId: movie.id }}
      size="small"
      aria-label="write review"
    >
      <RateReviewIcon color="black" fontSize="small" />
    </IconButton>
  );
};

export default WriteReviewIcon;
