import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import AppBar from './components/app-bar';
import Banner from './pages/banner';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Background from './components/background';
import defaultTheme from './components/default-theme';
import {
  CssBaseline
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <Background />
        <AppBar />
        <Routes>
          <Route exact path='/' element={<Banner />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
