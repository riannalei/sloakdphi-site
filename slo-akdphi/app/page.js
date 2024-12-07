'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function HomePage() {
  const buttonStyles = {
    marginTop: '30px',
    backgroundColor: 'transparent', // No background
    color: '#6b625a', // Matches earlier text color
    border: '1px solid #6b625a', // Outline only
    borderRadius: '30px',
    padding: '10px 30px',
    textTransform: 'uppercase',
    fontSize: '1rem',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#6b625a', // Add background on hover
      color: '#fff', // Text color on hover
    },
  };

  const containerStyles = {
    backgroundColor: '#f9f9f7', // Matches earlier modal background
    borderRadius: '8px',
    padding: '40px',
    margin: '30px auto 30px', // Adds spacing below modal
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
    paddingBottom: '20px', // Adjust this
  }}
>

      {/* Background Image */}
      <Box
        component="img"
        src="/homepage/housepic.jpg" // Replace with the actual path to your image
        alt="Omicron Chapter"
        sx={{
          width: '100%',
          height: '60vh',
          objectFit: 'cover',
          position: 'relative',
        }}
      />

      {/* Centered Title Over Image */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          Omicron Chapter
        </Typography>
      </Box>

      {/* Main Content - Chapter Info */}
      <Box sx={containerStyles}>
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#6b625a',
            marginBottom: '30px',
          }}
        >
          California Polytechnic State University, San Luis Obispo
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            color: '#6b625a',
            lineHeight: '1.8',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Welcome to alpha Kappa Delta Phi's Omicron Chapter at the California Polytechnic State
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
            fontSize: '2rem',
            fontWeight: 700,
            color: '#6b625a',
            marginBottom: '30px',
          }}
        >
          Interested?
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            color: '#6b625a',
            lineHeight: '1.8',
            marginBottom: '30px',
          }}
        >
          RUSH Cal Poly's aKDPhi
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#6b625a',
            lineHeight: '1.8',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Our Fall 2024 Rush has come to a close! Thank you to everyone who came out and be sure to
          check back in for new rush information in the Winter!
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
