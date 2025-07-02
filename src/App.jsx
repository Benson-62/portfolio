import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import CVSection from './components/CVSection.jsx';
import MatrixBot from './components/MatrixBot.jsx';
import AnimatedBackground from './components/AnimatedBackground.jsx';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f6f7fb',
      paper: '#fff',
    },
    primary: {
      main: '#2e2e3a',
    },
    secondary: {
      main: '#7f5af0',
    },
    accent: {
      main: '#00ff99',
    },
    text: {
      primary: '#2e2e3a',
      secondary: '#7f5af0',
    },
  },
  typography: {
    fontFamily: 'Inter, monospace',
    h1: { fontWeight: 900 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatedBackground />
      <Box sx={{ width: '100vw', minHeight: '100vh', overflowX: 'hidden' }}>
        <Home />
        <About />
        <Projects />
        <CVSection />
        <Contact />
        <MatrixBot />
      </Box>
    </ThemeProvider>
  );
}
