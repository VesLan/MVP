import _React, { FC } from 'react';
import { Button, Typography } from '@mui/material';

import { IProjectList } from '../interfaces/IProjectList';

const ProjectList: FC<IProjectList> = ({
  showMd,
  setShowMd,
  setProjIndex,
}) => {
  const handleClick = () => {
    setProjIndex(0);
    setShowMd(!showMd);
  };

  return (
    <Button sx={{ m: 1 }} onClick={handleClick}>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: 'frijole',
          letterSpacing: 2,
        }}
      >
        {showMd
          ? 'Click to Show Superior'
          : 'Click to Show Info'}
      </Typography>
    </Button>
  );
};

export default ProjectList;
