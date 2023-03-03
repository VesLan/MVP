import _React, { FC } from 'react';
import { Button, Typography, Box } from '@mui/material';

import { IProjectList } from '../interfaces/IProjectList';

const ProjectList: FC<IProjectList> = ({
  setProjIndex,
}) => {
  return (
    <Button sx={{ m: 1 }} onClick={() => setProjIndex(0)}>
      <Typography
        sx={{
          fontSize: 15,
          fontFamily: 'frijole',
          letterSpacing: 1,
        }}
      >
        Front-End Capstone Project
      </Typography>
    </Button>
  );
};

export default ProjectList;
