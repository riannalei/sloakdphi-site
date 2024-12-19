'use client';

import React from 'react';
import { Box, Typography, Card, CardActionArea, CardContent } from '@mui/material';
import { useRouter } from 'next/navigation';

const sectionTitleStyles = {
  fontSize: '2.4rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  marginTop: '5px',
  marginBottom: '5px', // Reduced spacing below the title
  color: '#6b625a',
};

const subtitleStyles = {
  fontSize: '1.2rem',
  color: '#6b625a',
  lineHeight: '1.6',
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
};

// const subtitleStyles = {
//   fontSize: '1.2rem',
//   textAlign: 'center',
//   lineHeight: '1.6',
//   fontWeight: 400,
//   color: '#6b625a',
//   maxWidth: '800px',
//   marginBottom: '10px', // Reduced spacing below the subtitle
// };

const pillars = [
  {
    title: 'Active House',
    description: 'Explore information about the Active House.',
    href: '/sisters/activehouse',
  },
  {
    title: 'Chapter Roster',
    description: 'View the full Chapter Roster of our sisters.',
    href: '/sisters/roster',
  },
  {
    title: 'E-Board & Cabinet',
    description: 'Meet our E-Board and Cabinet members.',
    href: '/sisters/board',
  },
];

export default function SistersPage() {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff', // White background
        padding: '2rem 1rem',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Page Title */}
      <Box sx={{ margin: '0 auto', width: '100%', padding: '0px' }}>
        <Typography sx={sectionTitleStyles}>Our Sisters</Typography>
        <Typography sx={subtitleStyles}>CAL POLY aKDPhi - Omicron Chapter</Typography>
      </Box>

      {/* Pillars */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto', // Center the pillars
          marginTop: '5rem', // Minimal spacing above pillars
          padding: '0px', // Remove padding
        }}
      >
        {pillars.map((pillar, index) => (
          <Card
            key={index}
            sx={{
              flex: 1,
              maxWidth: '300px',
              backgroundColor: '#847c74', // Lighter brown for cards
              color: '#ffffff',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
              },
              minHeight: '350px', // Set consistent height for cards
              padding: '1rem',
            }}
          >
            <CardActionArea onClick={() => router.push(pillar.href)} sx={{ height: '100%' }}>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#ffffff', // White text for contrast
                  }}
                >
                  {pillar.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#f5f5f5' }}>
                  {pillar.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
