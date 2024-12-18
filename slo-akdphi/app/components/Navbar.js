'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);

  useEffect(() => {
    const pathToIndex = {
      '/': 0,
      '/about': 1,
      '/awards': 2,
      '/recruitment': 3,
      '/connect': 5,
    };

    // Check if the path starts with `/sisters` to highlight the SISTERS tab
    if (pathname.startsWith('/sisters')) {
      setValue(4);
    } else {
      setValue(pathToIndex[pathname] ?? 0); // Default to 0 if no match
    }
  }, [pathname]);

  const handleChange = (event, newValue) => {
    const paths = ['/', '/about', '/awards', '/recruitment', '/sisters', '/connect'];
    router.push(paths[newValue]);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#f9f9f7',
        boxShadow: 'none',
        padding: '10px 20px',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: '1.5rem',
              color: '#6b625a',
              fontFamily: 'Inter, Arial, sans-serif',
              letterSpacing: '0.05em',
            }}
          >
            CAL POLY aKDPhi
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontSize: '1rem',
              color: '#6b625a',
              marginTop: '-5px',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          >
            Omicron Chapter
          </Typography>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          TabIndicatorProps={{ style: { backgroundColor: '#dccff9' } }}
          sx={{
            '& .MuiTab-root': {
              fontWeight: 600,
              fontSize: '1rem',
              color: '#6b625a',
              fontFamily: 'Inter, Arial, sans-serif',
              textTransform: 'none',
            },
          }}
        >
          <Tab label="HOME" />
          <Tab label="ABOUT" />
          <Tab label="AWARDS" />
          <Tab label="RECRUITMENT" />
          <Tab label="SISTERS" />
          <Tab label="CONNECT" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
