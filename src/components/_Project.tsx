import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  CardMedia,
  Typography,
} from '@mui/material';

import { IProject } from '../interfaces/IProject';

const Project: FC<IProject> = ({ projIndex }) => {
  return (
    <React.Fragment>
      {projIndex === 0 && (
        <Box
          sx={{
            mx: '5%',
            my: 3,
            width: '90%',
            height: 800,
            padding: 2,
            border: '1px solid black',
          }}
        >
          <CardMedia
            component="iframe"
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
};

export default Project;
