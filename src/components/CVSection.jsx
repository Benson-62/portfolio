import React, { useRef } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function CVSection() {
  const fileInput = useRef();

  const handleUpload = (e) => {
    // Only for private use, not public upload
    const file = e.target.files[0];
    if (file) {
      alert(`CV '${file.name}' selected! (You can now move it to src/assets manually.)`);
    }
  };

  return (
    <section id="cv" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={4} sx={{ p: 6, background: 'rgba(255,255,255,0.85)', borderRadius: 6, textAlign: 'center', maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h4" sx={{ mb: 2, color: '#232946', fontWeight: 700 }}>
          My CV
        </Typography>
        {/* Blurred PDF preview with overlay text */}
        <Box sx={{ mb: 3, borderRadius: 2, overflow: 'hidden', position: 'relative', border: '2px solid #7f5af0' }}>
          <iframe
            src="/Benson B Varghese.pdf"
            title="CV Preview"
            width="100%"
            height="400px"
            style={{ border: 'none', filter: 'blur(4px)', pointerEvents: 'none' }}
          />
          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 24,
            background: 'rgba(44, 44, 44, 0.25)',
            pointerEvents: 'none',
            textShadow: '0 2px 8px #232946',
            letterSpacing: 1
          }}>
            Preview Blurred - Click to View Full CV
          </Box>
        </Box>
        <Button
          variant="contained"
          color="secondary"
          href="/Benson B Varghese.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mb: 2, fontWeight: 600 }}
        >
          View / Download CV (PDF)
        </Button>
      </Paper>
    </section>
  );
} 