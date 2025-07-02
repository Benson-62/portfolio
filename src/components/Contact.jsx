import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', p: { xs: 2, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, background: 'rgba(255,255,255,0.92)', borderRadius: 6, textAlign: 'center' }}>
            <Typography variant="h3" sx={{ color: '#232946', fontWeight: 900, mb: 2 }}>
              Contact
            </Typography>
            <Typography sx={{ color: '#7f5af0', fontWeight: 700, mb: 2, fontSize: 20 }}>
              Get in touch
            </Typography>
            <Typography sx={{ color: '#232946', fontSize: 18, mb: 2 }}>
              {/* Add your contact info or form here */}
              Email: <a href="mailto:bensonbvarghese62@gmail.com" style={{ color: '#00ff99', textDecoration: 'none', fontWeight: 600 }}>bensonbvarghese62@gmail.com</a>
            </Typography>
            <Typography sx={{ color: '#232946', fontSize: 16, opacity: 0.7 }}>
              Or reach out via LinkedIn or GitHub below.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 3 }}>
              <a href="https://www.linkedin.com/in/benson-b-varghese-025897256/" target="_blank" rel="noopener noreferrer" style={{ color: '#7f5af0', fontSize: 28 }}>
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/Benson-62" target="_blank" rel="noopener noreferrer" style={{ color: '#232946', fontSize: 28 }}>
                <i className="fab fa-github"></i> GitHub
              </a>
            </Box>
          </Paper>
        </motion.div>
      </Box>
    </section>
  );
} 