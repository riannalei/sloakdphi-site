'use client';

import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function ConnectPage() {
  const sectionTitleStyles = {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#6b625a',
    letterSpacing: '0.1em',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const subTextStyles = {
    fontSize: '1.2rem',
    color: '#6b625a',
    lineHeight: '1.6',
    textAlign: 'left', // Aligning text to the left
    maxWidth: '800px',
    margin: '0 auto',
  };

  const containerStyles = {
    backgroundColor: '#f9f9f7',
    borderRadius: '12px',
    padding: '40px 90px', // Static values
    margin: '40px auto',
    maxWidth: '2000px',
    width: '95%',
  };

  return (
    <Box sx={{ padding: '5px 0px', backgroundColor: '#ffffff', minHeight: '50vh' }}>
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Contact Us</Typography>
        <Typography sx={subTextStyles}>
          Thank you for looking through our website! If you have any questions or comments,
          please feel free to email us or DM us on Instagram.
        </Typography>
        <Typography sx={{ ...subTextStyles, marginTop: '10px' }}>
          <strong>Email:</strong>{' '}
          <Link href="mailto:slokdphi.president@gmail.com" underline="hover">
            slokdphi.president@gmail.com
          </Link>
          <br />
          <strong>Instagram:</strong>{' '}
          <Link href="https://www.instagram.com/sloakdphi" target="_blank" underline="hover">
            @sloakdphi
          </Link>
          <br />
          <strong>TikTok:</strong>{' '}
          <Link href="https://www.tiktok.com/@sloakdphi" target="_blank" underline="hover">
            @sloakdphi
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
