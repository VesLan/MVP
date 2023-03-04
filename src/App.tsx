import _React, { useState, FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

// IMPORT COMPONENTS
import Header from './components/_Header';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Home from './components/_Home';
import About from './components/_About';
import Education from './components/_Education';
import Experience from './components/_Experience';
import Project from './components/_Project';
import Task from './components/_Task';

// IMPORT PAIR COMPONENTS
import ContactForm from './components/_ContactForm';
import AboutList from './components/_AboutList';
import ProjectList from './components/_ProjectList';

type Anchor = 'right';

const App: FC = (): ReactElement => {
  // STATES FOR ABOUT PAGE
  const [tabValue, setTabValue] = useState<number>(0);
  const [activeCard, setActiveCard] = useState(1);
  const [petListState, setPetListState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // STATES FOR PROJECT PAGE
  const [projIndex, setProjIndex] = useState<number>(-1);
  const [showMd, setShowMd] = useState<boolean>(true);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setPetListState({ ...petListState, [anchor]: open });
    };

  return (
    <div className="App">
      <Header
        tabValue={tabValue}
        setTabValue={setTabValue}
      />
      <Grid container>
        <Grid xs={9}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <About
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                  toggleDrawer={toggleDrawer}
                />
              }
            />
            <Route
              path="/education"
              element={<Education />}
            />
            <Route
              path="/experience"
              element={<Experience />}
            />
            <Route
              path="/project"
              element={
                <Project
                  showMd={showMd}
                  projIndex={projIndex}
                />
              }
            />
            <Route path="/task" element={<Task />} />
          </Routes>
        </Grid>
        <Grid xs={3}>
          {tabValue === 0 && (
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <ContactForm />
            </SnackbarProvider>
          )}
          {tabValue === 1 && activeCard === 3 && (
            <AboutList
              petListState={petListState}
              toggleDrawer={toggleDrawer}
            />
          )}
          {tabValue === 4 && (
            <ProjectList
              showMd={showMd}
              setShowMd={setShowMd}
              setProjIndex={setProjIndex}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
