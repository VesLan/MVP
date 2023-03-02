import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const TimeDisplay = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        sx={{
          ml: 2,
          mr: 2,
          fontFamily: 'Arial',
          fontSize: 15,
        }}
      >
        {time.toLocaleTimeString()}
      </Typography>
    </React.Fragment>
  );
};

export default TimeDisplay;
