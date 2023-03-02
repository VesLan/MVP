import React, { FC } from 'react';
import {
  Box,
  Typography,
  TypographyProps,
} from '@mui/material';
import { styled } from '@mui/system';

const Home: FC = () => {
  const StyledParagraph = styled(
    Typography,
  )<TypographyProps>(() => ({
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: '0.05rem',
    lineHeight: 1.5,
    paragraph: true,
  }));

  return (
    <React.Fragment>
      <Box
        sx={{
          mx: 4,
          my: 2,
          p: 4,
        }}
      >
        <StyledParagraph
          sx={{
            mb: 3,
            fontFamily: 'Helvetica Neue',
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          Hi there!
        </StyledParagraph>
        <StyledParagraph
          sx={{
            mb: 3,
            fontFamily: 'Helvetica Neue',
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          I am a full stack student currently studying at
          Hack Reactor, and I am excited to share some
          information about myself. I have a solid
          foundation in several programming languages and
          technologies, including Node.js, React, MongoDB,
          MySQL, SQLite, PostgreSQL, and Express. In
          addition, I also have some knowledge of
          TypeScript, Material-UI, Python, Unity, Java,
          Spring, and Django.
        </StyledParagraph>
        <StyledParagraph
          sx={{
            mb: 3,
            fontFamily: 'Helvetica Neue',
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          I am passionate about software development and
          enjoy learning new technologies and languages to
          stay up to date with the latest trends in the
          industry. I am a detail-oriented and dedicated
          individual who is always willing to go the extra
          mile to ensure that my work is of the highest
          quality.
        </StyledParagraph>
        <StyledParagraph
          sx={{
            mb: 3,
            fontFamily: 'Helvetica Neue',
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          I am excited to continue developing my skills as a
          full stack developer, and I am always looking for
          opportunities to collaborate with other passionate
          individuals in the field.
        </StyledParagraph>
      </Box>
    </React.Fragment>
  );
};

export default Home;
