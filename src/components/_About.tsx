import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Paper,
  Button,
  Typography,
  Box,
  CardMedia,
} from '@mui/material';
import MusicCard from './_MusicCard';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const CarouselWrapper = styled('div')({
  width: 600,
  height: 500,
  perspective: 1600,
  marginLeft: 100,
});

const CardWrapper = styled(Paper)(() => ({
  position: 'absolute',
  width: 'calc(100% - 40px)',
  height: 'calc(100% - 40px)',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transformStyle: 'preserve-3d',
  transition: 'transform 1s',
  transformOrigin: 'center',
}));

const Music = styled(CardWrapper)({
  background: 'linear-gradient(#CEEDDB, #8BE8CB)',
});

const Sport = styled(CardWrapper)({
  background: 'linear-gradient(#FFA9A3, #B9E6FF)',
  transform: 'rotateY(60deg)',
});

const Pet = styled(CardWrapper)({
  background: 'linear-gradient(#FFE347, #FCF7FF)',
  transform: 'rotateY(-60deg)',
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
});

import { IAbout } from '../interfaces/IAbout';

const About: FC<IAbout> = ({
  activeCard,
  setActiveCard,
  toggleDrawer,
}) => {
  const handleNext = () => {
    setActiveCard((prevActiveCard) =>
      prevActiveCard === 3 ? 1 : prevActiveCard + 1,
    );
  };

  const handlePrev = () => {
    setActiveCard((prevActiveCard) =>
      prevActiveCard === 1 ? 3 : prevActiveCard - 1,
    );
  };

  const getZIndex = (cardNumber: number) => {
    return activeCard === cardNumber ? 2 : 1;
  };

  return (
    <React.Fragment>
      <Wrapper>
        <CarouselWrapper>
          <Music
            style={{
              transform: `rotateY(${
                (activeCard - 1) * 120
              }deg)`,
              zIndex: getZIndex(1),
            }}
            sx={{
              display: 'flex',
            }}
          >
            <Grid container>
              <Grid xs={12}>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'black',
                      fontFamily: 'frijole',
                    }}
                  >
                    My Music
                  </Typography>
                </Box>
              </Grid>
              <MusicCard
                title={['Perfect', 'Apologize']}
                audioSrc={[
                  'src/assets/audios/Perfect.mp3',
                  'src/assets/audios/Apologize.mp3',
                  'src/assets/audios/MyMusic1.mp3',
                  'src/assets/audios/MyMusic2.mp3',
                ]}
                imageSrc={[
                  'src/assets/images/Perfect.jpg',
                  'src/assets/images/Apologize.jpg',
                  'src/assets/images/MyMusic1.png',
                  'src/assets/images/MyMusic2.png',
                ]}
              />
            </Grid>
          </Music>
          <Sport
            style={{
              transform: `rotateY(${
                (activeCard - 2) * 120
              }deg)`,
              zIndex: getZIndex(2),
            }}
          >
            <Grid container>
              <Grid xs={12}>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'black',
                      fontFamily: 'frijole',
                    }}
                  >
                    My Sport
                  </Typography>
                </Box>
              </Grid>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image="src/assets/images/MySport.png"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '80%',
                  }}
                />
              </Box>
            </Grid>
          </Sport>
          <Pet
            style={{
              transform: `rotateY(${
                (activeCard - 3) * 120
              }deg)`,
              zIndex: getZIndex(3),
            }}
          >
            <Grid container>
              <Grid xs={12}>
                <Box
                  sx={{
                    mb: 2,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'black',
                      fontFamily: 'frijole',
                    }}
                  >
                    My Pet
                  </Typography>
                </Box>
              </Grid>
              <Box
                sx={{
                  mb: 4,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CardMedia
                  component="video"
                  src="src/assets/videos/MyPet.mp4"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '80%',
                    opacity: 0.8,
                  }}
                  controls
                />
              </Box>
            </Grid>
          </Pet>
        </CarouselWrapper>
        <ButtonWrapper>
          <Button onClick={handlePrev} sx={{ mx: 1 }}>
            Prev
          </Button>
          <Button onClick={handleNext} sx={{ mx: 1 }}>
            Next
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default About;
