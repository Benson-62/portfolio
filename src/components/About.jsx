import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';
import bensonPhoto from '../assets/benson-photo.jpg';

export default function About() {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6, p: { xs: 2, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          <img
            src={bensonPhoto}
            alt="Benson B Varghese"
            style={{ width: 220, height: 260, borderRadius: 24, boxShadow: '0 8px 32px #23294655', objectFit: 'cover', border: '4px solid #7f5af0' }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ flex: 2 }}
        >
          <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, background: 'rgba(255,255,255,0.92)', borderRadius: 6 }}>
            <Typography variant="h3" sx={{ color: '#232946', fontWeight: 900, mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="h5" sx={{ color: '#7f5af0', fontWeight: 700, mb: 2 }}>
              Benson B Varghese
            </Typography>
            <Typography sx={{ color: '#232946', fontSize: 18, lineHeight: 1.7 }}>
              {/* Add your bio here */}
              I am a passionate developer with a love for creative coding, problem solving, and building beautiful digital experiences. I enjoy working with modern web technologies and always strive to learn and grow.
            </Typography>
          </Paper>
        </motion.div>
      </Box>
    </section>
  );
} 