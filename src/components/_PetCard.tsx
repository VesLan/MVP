import React, { FC, useState } from 'react';
import {
  CardMedia,
  Modal,
  Box,
  IconButton,
} from '@mui/material';

import { IPetCard } from '../interfaces/IPetCard';

const CarouselStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const PetCard: FC<IPetCard> = ({ src }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <Modal open={open} onClick={() => setOpen(false)}>
        <Box sx={CarouselStyle}>
          <CardMedia
            component="img"
            image={src}
            sx={{
              my: 1,
              alignItems: 'center',
              maxWidth: 400,
              maxHeight: 400,
              objectFit: 'cover',
            }}
          />
        </Box>
      </Modal>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          borderRadius: 0,
        }}
      >
        <CardMedia
          component="img"
          image={src}
          sx={{
            my: 1,
            alignItems: 'center',
            width: 200,
            height: 200,
            objectFit: 'cover',
          }}
        />
      </IconButton>
    </React.Fragment>
  );
};

export default PetCard;
