import React from 'react';
import {
  Box,
  Typography,
  TypographyProps,
} from '@mui/material';
import { styled } from '@mui/system';

type Props = {};

function About({}: Props) {
  const StyledParagraph = styled(
    Typography,
  )<TypographyProps>(({ theme }) => ({
    fontFamily: 'Helvetica Neue',
    fontSize: 20,
    letterSpacing: '0.1rem',
    lineHeight: 1.5,
  }));

  return (
    <Box
      sx={{
        mx: 4,
        my: 2,
      }}
    >
      <StyledParagraph>Hi there!</StyledParagraph>
      <StyledParagraph>
        I am a full stack student currently studying at Hack
        Reactor, and I am excited to share some information
        about myself. I have a solid foundation in several
        programming languages and technologies, including
        Node.js, React, MongoDB, MySQL, SQLite, PostgreSQL,
        and Express. In addition, I also have some knowledge
        of TypeScript, Material-UI, Python, Unity, Java,
        Spring, and Django.
      </StyledParagraph>
      <StyledParagraph>
        I am passionate about software development and enjoy
        learning new technologies and languages to stay up
        to date with the latest trends in the industry. I am
        a detail-oriented and dedicated individual who is
        always willing to go the extra mile to ensure that
        my work is of the highest quality.
      </StyledParagraph>
      <StyledParagraph>
        I am excited to continue developing my skills as a
        full stack developer, and I am always looking for
        opportunities to collaborate with other passionate
        individuals in the field.
      </StyledParagraph>
    </Box>
  );
}

export default About;
