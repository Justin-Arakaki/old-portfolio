import React, { useState } from 'react';
import AppBar from './components/app-bar';
import Banner from './components/banner';
import Background from './components/background';
import defaultTheme from './components/default-theme';
import {
  CssBaseline,
  Typography
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline enableColorScheme />
      <Background />
      <AppBar />
      <Banner />
    </ThemeProvider>
  );
}

export default App;
