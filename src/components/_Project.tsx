import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
type Props = {};

function Project({}: Props) {
  const [projectOne, setProjectOne] =
    useState<boolean>(false);
  return (
    <React.Fragment>
      {!projectOne && (
        <Button>
          <Typography
            sx={{
              m: 3,
              fontSize: 30,
              fontFamily: 'frijole',
              letterSpacing: 2,
            }}
          >
            Front-End Capstone Project
          </Typography>
        </Button>
      )}
      {projectOne && (
        <Box
          sx={{
            width: 800,
            height: 800,
            padding: 2,
            border: '1px solid black',
          }}
        >
          <iframe
            src="http://localhost:3000/"
            title="Test"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </Box>
      )}
    </React.Fragment>
  );
}

export default Project;
