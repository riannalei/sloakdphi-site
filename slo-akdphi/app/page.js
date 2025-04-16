'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function HomePage() {
  const buttonStyles = {
    backgroundColor: '#6b625a',
    color: '#fff',
    padding: { xs: '8px 16px', sm: '10px 20px' },
    borderRadius: '24px',
    marginTop: { xs: '20px', sm: '30px' },
    fontWeight: 600,
    marginRight: { xs: '5px', sm: '10px' },
    fontSize: { xs: '0.9rem', sm: '1rem' },
    '&:hover': {
      backgroundColor: '#4a4944',
    },
  };

  const containerStyles = {
    backgroundColor: '#f9f9f7',
    borderRadius: '12px',
    padding: { xs: '20px', sm: '40px' },
    margin: { xs: '20px auto', sm: '30px auto' },
    maxWidth: '2000px',
    width: '95%',
    textAlign: 'center',
  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        position: 'relative',
        paddingBottom: '20px',
      }}
    >
      <Box
        component="div"
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '40vh', sm: '60vh' },
          overflow: 'hidden',
        }}
      >
        {/* Background Image */}
        <Box
          component="video"
          src="/homepage/homepage.mov"
          autoPlay
          loop
          muted
          playsInline
          alt="Omicron Chapter"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Centered Title Over Image */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#f9f9f7',
            width: '90%',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' },
              fontWeight: 600,
              letterSpacing: '0.1em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Omicron Chapter
          </Typography>
        </Box>
      </Box>

      {/* Main Content - Chapter Info */}
      <Box sx={containerStyles}>
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem' },
            fontWeight: 700,
            color: '#6b625a',
            marginBottom: { xs: '20px', sm: '30px' },
          }}
        >
          California Polytechnic State University, San Luis Obispo
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem' },
            color: '#6b625a',
            lineHeight: '1.8',
            marginBottom: { xs: '20px', sm: '30px' },
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Welcome to alpha Kappa Delta Phi&apos;s Omicron Chapter at the California Polytechnic State
          University, San Luis Obispo. alpha Kappa Delta Phi is the largest and only international
          Asian interest sorority on campus. The sorority was founded at the University of
          California, Berkeley in 1990, and since then, it has grown to become the first and largest
          international Asian-American interest sorority, with more than 7,000 sisters and 55
          chapters. We strive to uphold our pillars of sisterhood, service, scholarship, leadership,
          and Asian Awareness in our community and at Cal Poly.
        </Typography>
      </Box>

      {/* Recruitment Modal */}
      <Box sx={containerStyles}>
        <Typography
          sx={{
            fontSize: { xs: '1.5rem', sm: '2rem' },
            fontWeight: 700,
            color: '#6b625a',
            marginBottom: { xs: '20px', sm: '30px' },
          }}
        >
          Interested?
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem' },
            color: '#6b625a',
            lineHeight: '1.8',
            marginBottom: { xs: '20px', sm: '30px' },
          }}
        >
          RUSH Cal Poly&apos;s aKDPhi
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', sm: '1rem' },
            color: '#6b625a',
            lineHeight: '1.8',
            marginBottom: { xs: '20px', sm: '30px' },
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Our Winter 2025 Rush is coming soon! Stay tuned for updates and get ready to learn more about alpha Kappa Delta Phi. We can&apos;t wait to meet you!
        </Typography>
        <Button
          variant="contained"
          sx={buttonStyles}
          href="/recruitment"
        >
          Rush Page
        </Button>
      </Box>
    </Box>
  );
}
