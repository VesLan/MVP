// IMPORT REACT
import React, { FC, ReactElement, useEffect } from 'react';

// IMPORT COMPONENTS
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useScrollTrigger,
  Fab,
  Fade,
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';
import {
  Apple,
  GitHub,
  LinkedIn,
  GTranslate,
  KeyboardArrowUp,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { TabProps } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import TimeDisplay from './_TimeDisplay';

// IMPORT INTERFACES
import { IHeader } from '../interfaces/IHeader';
import { IScrollTop } from '../interfaces/IScrollTop';

const ScrollTop: FC<IScrollTop> = (props): ReactElement => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0, // As soon as scroll, it will show
  });

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument ||
      document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
};

const Header: FC<IHeader> = (props) => {
  // STATES

  // For Tabs Switch
  const tabValue = props.tabValue;
  const setTabValue = props.setTabValue;

  const navigate = useNavigate();
  const handleClick = (label: string) => {
    navigate(`/${label}`);
  };

  const StyledTab = styled(Tab)<TabProps>(() => ({
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontWeight: 450,
    letterSpacing: '0',
    color: 'inherit',
    textDecoration: 'none',
    textTransform: 'none',
    minWidth: 5,
  }));

  useEffect(() => {
    if (
      window.location.pathname === '/' &&
      tabValue !== 0
    ) {
      setTabValue(0);
    } else if (
      window.location.pathname === '/about' &&
      tabValue !== 1
    ) {
      setTabValue(1);
    } else if (
      window.location.pathname === '/education' &&
      tabValue !== 2
    ) {
      setTabValue(2);
    } else if (
      window.location.pathname === '/experience' &&
      tabValue !== 3
    ) {
      setTabValue(3);
    } else if (
      window.location.pathname === '/project' &&
      tabValue !== 4
    ) {
      setTabValue(4);
    }
  }, [tabValue]);

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar
          id="back-to-top-anchor"
          variant="dense"
          disableGutters
        >
          <Apple
            sx={{
              ml: 2,
              mr: 1,
              fontSize: 20,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica Neue',
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: '0',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Finder
          </Typography>
          <Tabs
            value={tabValue}
            onChange={(e, value) => setTabValue(value)}
            indicatorColor="secondary"
          >
            <StyledTab
              label="Home"
              onClick={() => handleClick('')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <StyledTab
              label="About"
              onClick={() => handleClick('about')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <StyledTab
              label="Education"
              onClick={() => handleClick('education')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <StyledTab
              label="Experience"
              onClick={() => handleClick('experience')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <StyledTab
              label="Project"
              onClick={() => handleClick('project')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
            <StyledTab
              label="Task"
              onClick={() => handleClick('task')}
              sx={{ display: { xs: 'none', md: 'flex' } }}
            />
          </Tabs>
          <GTranslate
            sx={{
              color: 'white',
              ml: 'auto',
              mr: 2,
            }}
          />
          <Link
            to="#"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/zhixiang-peng/',
                '_blank',
              )
            }
          >
            <LinkedIn
              sx={{
                color: 'white',
                ml: 2,
                mr: 2,
                mt: 0.5,
              }}
            />
          </Link>
          <Link
            to="#"
            onClick={() =>
              window.open(
                'https://github.com/VesLan',
                '_blank',
              )
            }
          >
            <GitHub
              sx={{
                color: 'white',
                ml: 2,
                mr: 2,
                mt: 0.5,
              }}
            />
          </Link>
          <Avatar
            src="src/assets/images/MyAvatar.png"
            sx={{
              ml: 2,
              mr: 2,
              width: 24,
              height: 24,
            }}
          />
          <TimeDisplay />
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default Header;
