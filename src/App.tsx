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
import ProjectList from './components/_ProjectList';

const App: FC = (): ReactElement => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [projIndex, setProjIndex] = useState<number>(-1);

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
            <Route path="/about" element={<About />} />
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
              element={<Project projIndex={projIndex} />}
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
          {tabValue === 4 && (
            <ProjectList setProjIndex={setProjIndex} />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
