import React, { useState, FC } from 'react';
import { Box, Drawer } from '@mui/material';
import PetList from './_PetList';

import { IAboutList } from '../interfaces/IAboutList';

const AboutList: FC<IAboutList> = ({
  petListState,
  toggleDrawer,
}) => {
  const [petSrcs, setPetSrcs] = useState<string[]>([
    'src/assets/images/Pet_5.png',
    'src/assets/images/Pet_4.png',
    'src/assets/images/Pet_3.png',
    'src/assets/images/Pet_2.png',
    'src/assets/images/Pet_1.png',
  ]);

  return (
    <React.Fragment>
      {/* <Drawer
        anchor={'right' as const}
        open={petListState['right' as const]}
        onClose={toggleDrawer('right' as const, false)}
      > */}
      <Box
        sx={{
          mt: 3,
          maxHeight: 550,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'scroll',
          scrollSnapAlign: 'start',
        }}
      >
        <PetList petSrcs={petSrcs} />
      </Box>
      {/* </Drawer> */}
    </React.Fragment>
  );
};

export default AboutList;
