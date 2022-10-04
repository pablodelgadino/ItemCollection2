import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Spinner.css'

const Spinner =() => {
  return (
    <Box className= "spinner">
      <CircularProgress color="inherit" />
    </Box>
  );
}

export default Spinner;