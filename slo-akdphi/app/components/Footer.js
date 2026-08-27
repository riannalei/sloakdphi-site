'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export default function Footer() {
  return (
      <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      py: 4,
      mt: 4,
      backgroundImage: 'url(/homepage/y2k-footer-bg.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
      },

      '& > *': {
        position: 'relative',
        zIndex: 1,
      },
    }}
  >
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ fontFamily: 'Inter, Arial, sans-serif', color: '#41250dff' }}
      >
        CAL POLY aKDPhi
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '0.85rem',
          color: '#41250dff',
        }}
      >
        Omicron Chapter
      </Typography>
      <Typography
        variant="caption"
        sx={{
          display: 'block',
          mt: 1,
          color: '#41250dff',
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        SISTERHOOD | LEADERSHIP | SCHOLARSHIP | SERVICE | ASIAN-AWARENESS
      </Typography>
      <Typography
        variant="caption"
        sx={{
          mt: 2,
          display: 'block',
          color: '#6b625a',
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        © 2024 alpha Kappa Delta Phi Sorority, Inc.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <IconButton
          href="https://www.instagram.com/sloakdphi/"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon sx={{ color: '#dccff9' }} />
        </IconButton>
        <IconButton
          href="https://www.tiktok.com/@sloakdphi?lang=en"
          target="_blank"
          aria-label="TikTok"
        >
          <VideoLibraryIcon sx={{ color: '#dccff9' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

