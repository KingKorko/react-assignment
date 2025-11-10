import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

 {/* Assignment Additions - Same as the movie labs.*/}

export default function CircularIndeterminate() {
  return (
    <div sx={{
        display: 'flex',
        justifyContent: "center",
        '& > * + *': {
          marginLeft: '2em',
        }}}>
      <CircularProgress />
      <CircularProgress />
    </div>
  );
}
