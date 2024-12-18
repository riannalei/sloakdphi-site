'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

export default function RosterPage() {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#6b625a', marginBottom: '1rem' }}>
        Chapter Roster
      </Typography>
      <Typography sx={{ fontSize: '1.2rem', color: '#6b625a' }}>
        The chapter roster details will be displayed here.
      </Typography>
    </Box>
  );
}
