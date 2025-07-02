import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const sections = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  return (
    <Paper elevation={6} sx={{ borderRadius: 0, mb: 2 }}>
      <AppBar position="static" color="default" sx={{ background: '#f5e9da', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontFamily: 'Courier New, monospace', color: '#3a2c1a' }}>
            Benson B Varghese
          </Typography>
          <Box>
            {sections.map((section) => (
              <Button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                sx={{ color: '#3a2c1a', fontFamily: 'Courier New, monospace', mx: 1 }}
              >
                {section.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
} 