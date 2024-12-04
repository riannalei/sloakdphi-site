'use client';

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary'; // TikTok substitute

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        textAlign: 'center',
        py: 4,
        borderTop: '1px solid #E0E0E0',
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        CAL POLY aKDPhi
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        Omicron Chapter
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
        SISTERHOOD | LEADERSHIP | SCHOLARSHIP | SERVICE | ASIAN-AWARENESS
      </Typography>
      <Typography variant="caption" sx={{ mt: 2, display: 'block', color: 'text.secondary' }}>
        © 2024 alpha Kappa Delta Phi Sorority, Inc.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <IconButton
          href="https://www.instagram.com/sloakdphi/"
          target="_blank"
          aria-label="Instagram"
        >
          <InstagramIcon sx={{ color: '#DCCFF9' }} />
        </IconButton>
        <IconButton
          href="https://www.tiktok.com/@sloakdphi?lang=en"
          target="_blank"
          aria-label="TikTok"
        >
          <VideoLibraryIcon sx={{ color: '#DCCFF9' }} />
        </IconButton>
      </Box>
    </Box>
  );
}
