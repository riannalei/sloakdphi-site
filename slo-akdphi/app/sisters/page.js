'use client';

import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import Link from 'next/link';

const sectionTitleStyles = {
  fontSize: '2rem',
  fontWeight: 700,
  color: '#6b625a',
  letterSpacing: '0.1em',
  marginBottom: '20px',
  textAlign: 'center',
};

export default function SistersPage() {
  const tabLinks = [
    { label: 'Active House', href: '/sisters/activehouse' },
    { label: 'Chapter Roster', href: '/sisters/roster' },
    { label: 'E-Board & Cabinet', href: '/sisters/board' },
  ];

  return (
    <Box sx={{ backgroundColor: '#ffffff', padding: '2rem 1rem', height: '100%' }}>
      {/* Page Title */}
      <Typography sx={sectionTitleStyles}>Our Sisters</Typography>

      {/* Tabs for Navigation */}
      <Tabs
        centered
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ marginBottom: '1.5rem' }}
      >
        {tabLinks.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            component={Link}
            href={tab.href}
            sx={{
              fontSize: '1rem',
              fontWeight: 600,
              color: '#6b625a',
              '&:hover': {
                color: '#4a4944',
              },
            }}
          />
        ))}
      </Tabs>

      {/* Add Meaningful Content */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Typography
          sx={{
            fontSize: '1.2rem',
            color: '#6b625a',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          Learn more about our Sisters! 
        </Typography>
      </Box>
    </Box>
  );
}
