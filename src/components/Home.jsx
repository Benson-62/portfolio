import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: 36, md: 72 }, color: '#fff', letterSpacing: 2, mb: 2, textShadow: '0 4px 32px #23294699' }}>
            Benson B Varghese
          </Typography>
          <Typography variant="h4" sx={{ color: '#00ff99', fontWeight: 700, mb: 4, textShadow: '0 2px 16px #00ff9988' }}>
            Creative Developer & Problem Solver
          </Typography>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <Typography variant="h6" sx={{ color: '#7f5af0', mb: 6, fontWeight: 500 }}>
              Scroll down to explore my work
            </Typography>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ display: 'inline-block' }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff99" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
    </section>
  );
} 