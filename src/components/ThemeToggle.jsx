import React from 'react';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ThemeToggle({ darkMode, onToggle }) {
  return (
    <Box display="flex" alignItems="center" sx={{ ml: 2 }}>
      <Typography sx={{ fontFamily: 'Courier New, monospace', color: '#3a2c1a', mr: 1 }}>
        {darkMode ? 'Dark' : 'Light'} Mode
      </Typography>
      <Switch checked={darkMode} onChange={onToggle} color="default" />
    </Box>
  );
} 