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
      '/sisters': 4,
      '/connect': 5,
    };
    setValue(pathToIndex[pathname] || 0);
  }, [pathname]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const paths = ['/', '/about', '/awards', '/recruitment', '/sisters', '/connect'];
    router.push(paths[newValue]);
  };

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h6" fontWeight="bold">CAL POLY aKDPhi</Typography>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontSize: '0.9rem', marginTop: '-5px' }}>
            Omicron Chapter
          </Typography>
        </Box>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          TabIndicatorProps={{ style: { backgroundColor: '#DCCFF9' } }}
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
