import React, { FC, useState, useRef } from 'react';
import {
  SkipPrevious,
  SkipNext,
  PlayArrow,
  Pause,
} from '@mui/icons-material';
import {
  Box,
  CardMedia,
  Typography,
  IconButton,
} from '@mui/material';

interface IMusicCard {
  audioSrc: string[];
  imageSrc: string[];
  title: string[];
}

const MusicCard: FC<IMusicCard> = ({
  audioSrc,
  imageSrc,
  title,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement>(null);

  const [musicIndex, setMusicIndex] = useState<number>(0);

  const handlePlay = () => {
    musicRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    musicRef.current?.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handelPrev = async () => {
    await (musicIndex === 0
      ? setMusicIndex(audioSrc.length - 1)
      : setMusicIndex(musicIndex - 1));

    await musicRef.current?.play();
    await setIsPlaying(true);
  };

  const handleNext = async () => {
    await (musicIndex === audioSrc.length - 1
      ? setMusicIndex(0)
      : setMusicIndex(musicIndex + 1));

    await musicRef.current?.play();
    await setIsPlaying(true);
  };

  return (
    <React.Fragment>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '50%',
              opacity: 0.8,
            }}
            image={imageSrc[musicIndex]}
            alt="Live From Space Album Cover"
          />
        </Box>
        <Typography
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: 'black',
            fontSize: 30,
            fontFamily: 'Creepster',
            letterSpacing: 4,
          }}
        >
          {title[musicIndex]}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <IconButton
            onClick={handelPrev}
            sx={{
              borderRadius: 0,
            }}
          >
            <SkipPrevious
              sx={{
                color: 'black',
                fontSize: 30,
              }}
            />
          </IconButton>
          <IconButton
            onClick={togglePlayPause}
            sx={{
              borderRadius: 0,
            }}
          >
            {!isPlaying ? (
              <PlayArrow
                sx={{
                  color: 'black',
                  fontSize: 30,
                }}
              />
            ) : (
              <Pause
                sx={{
                  color: 'black',
                  fontSize: 30,
                }}
              />
            )}
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              borderRadius: 0,
            }}
          >
            <SkipNext
              sx={{
                color: 'black',
                fontSize: 30,
              }}
            />
          </IconButton>
        </Box>
        <CardMedia
          component="audio"
          title={title[musicIndex]}
          src={audioSrc[musicIndex]}
          onPlay={handlePlay}
          onPause={handlePause}
          controls
          ref={musicRef}
          sx={{
            borderRadius: 0,
            width: 0,
            height: 0,
          }}
        />
      </Box>
    </React.Fragment>
  );
};

export default MusicCard;
