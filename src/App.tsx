import React, { FC, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/_Header';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Home from './components/_Home';
import About from './components/_About';
import Education from './components/_Education';
import Experience from './components/_Experience';
import Project from './components/_Project';
import Task from './components/_Task';
import ContactForm from './components/_ContactForm';

const App: FC = (): ReactElement => {
  return (
    <div className="App">
      <Header />
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
            <Route path="/project" element={<Project />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </Grid>
        <Grid xs={3}>
          <ContactForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;