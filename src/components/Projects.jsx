import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.jpg';
import img10 from '../assets/10.jpg';
import img11 from '../assets/11.jpg';
import img12 from '../assets/12.jpg';
import img13 from '../assets/13.jpg';

const screenshots = [
  { src: img1, caption: 'Login Page' },
  { src: img2, caption: 'Cycle Information' },
  { src: img3, caption: 'Sidebar Navigation' },
  { src: img4, caption: 'Mood Journal' },
  { src: img5, caption: 'Symptom Checker' },
  { src: img6, caption: '3D Symptom Checker' },
  { src: img7, caption: 'Settings Page' },
  { src: img8, caption: 'Dashboard' },
  { src: img9, caption: 'Emergency Contacts' },
  { src: img10, caption: 'Medical Records' },
  { src: img11, caption: 'Add Medical Record' },
  { src: img12, caption: 'Dashboard Welcome' },
  { src: img13, caption: 'Emergency Contacts List' },
];

const projects = [
  {
    title: 'Project 1',
    link: 'https://textile-pts1.vercel.app/',
    description: 'A Project using React and Mysql, it is a basic textile site.'
  },
  {
    title: 'Project 2',
    screenshots: screenshots,
    description: 'Medbot: A health companion app with login, health tracking, mood journal, symptom checker, and more.'
  }
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenModal = (images) => {
    setModalImages(images);
    setOpen(true);
  };
  const handleCloseModal = () => setOpen(false);

  const handleOpenLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };
  const handleCloseLightbox = () => setLightboxOpen(false);
  const handlePrev = () => setLightboxIndex((prev) => (prev === 0 ? modalImages.length - 1 : prev - 1));
  const handleNext = () => setLightboxIndex((prev) => (prev === modalImages.length - 1 ? 0 : prev + 1));

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleCloseLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, modalImages.length]);

  return (
    <section id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
      <Box sx={{ width: '100%', maxWidth: 1100, mx: 'auto', p: { xs: 2, md: 6 } }}>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" sx={{ color: '#232946', fontWeight: 900, mb: 4, textAlign: 'center' }}>
            Projects
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                viewport={{ once: true }}
                style={{ flex: '1 1 320px', maxWidth: 360, minWidth: 260 }}
              >
                <Paper elevation={5} sx={{ p: 4, borderRadius: 5, background: 'rgba(255,255,255,0.96)', height: '100%' }}>
                  <Typography variant="h5" sx={{ color: '#7f5af0', fontWeight: 700, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: '#232946', mb: 2 }}>
                    {project.description}
                  </Typography>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#00ff99', fontWeight: 600, textDecoration: 'none' }}>
                      View Project
                    </a>
                  )}
                  {project.screenshots && (
                    <button
                      style={{
                        background: '#00ff99',
                        color: '#232946',
                        border: 'none',
                        borderRadius: 4,
                        padding: '8px 18px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: 8
                      }}
                      onClick={() => handleOpenModal(project.screenshots)}
                    >
                      View Project
                    </button>
                  )}
                </Paper>
              </motion.div>
            ))}
          </Box>
        </motion.div>
        {/* Modal with image grid */}
        <Dialog open={open} onClose={handleCloseModal} maxWidth="md" fullWidth>
          <Box sx={{ position: 'relative', background: '#181c2b', p: 2 }}>
            <IconButton onClick={handleCloseModal} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 2 }}>
              <CloseIcon />
            </IconButton>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 4 }}>
              {modalImages.map((img, idx) => (
                <Box key={idx} sx={{ textAlign: 'center' }}>
                  <img
                    src={img.src}
                    alt={img.caption || `Project screenshot ${idx + 1}`}
                    style={{ maxWidth: 320, maxHeight: 220, borderRadius: 8, boxShadow: '0 4px 24px #23294655', margin: 8, cursor: 'pointer' }}
                    onClick={() => handleOpenLightbox(idx)}
                  />
                  <Typography sx={{ color: '#fff', fontSize: 14, mt: 1 }}>{img.caption}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Dialog>
        {/* Lightbox for individual image view */}
        <Dialog open={lightboxOpen} onClose={handleCloseLightbox} maxWidth="md" fullWidth>
          <Box sx={{ position: 'relative', background: '#181c2b', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 400, flexDirection: 'column' }}>
            <IconButton onClick={handleCloseLightbox} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 2 }}>
              <CloseIcon />
            </IconButton>
            <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 2 }}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <img
              src={modalImages[lightboxIndex]?.src}
              alt={modalImages[lightboxIndex]?.caption || `Project screenshot ${lightboxIndex + 1}`}
              style={{ maxWidth: '90%', maxHeight: 500, borderRadius: 12, boxShadow: '0 8px 32px #23294699' }}
            />
            <Typography sx={{ color: '#fff', fontSize: 16, mt: 2, textAlign: 'center' }}>
              {modalImages[lightboxIndex]?.caption}
            </Typography>
            <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 48, top: '50%', transform: 'translateY(-50%)', color: '#fff', zIndex: 2 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Dialog>
      </Box>
    </section>
  );
} 