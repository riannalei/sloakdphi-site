'use client';

import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const pathToIndex = {
      '/': 0,
      '/about/': 1,
      '/awards/': 2,
      '/recruitment/': 3,
      '/sisters/': 4,
      '/connect/': 5,
    };

    if (pathname.startsWith('/sisters')) {
      setValue(4);
    } else {
      setValue(pathToIndex[pathname] ?? 0);
    }
  }, [pathname]);

  const handleChange = (event, newValue) => {
    const paths = ['/', '/about/', '/awards/', '/recruitment/', '/sisters/', '/connect/'];
    router.push(paths[newValue]);
    setMobileOpen(false);
  };

  const menuItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about/' },
    { label: 'AWARDS', path: '/awards/' },
    { label: 'RECRUITMENT', path: '/recruitment/' },
    { label: 'SISTERS', path: '/sisters/' },
    { label: 'CONNECT', path: '/connect/' },
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem 
          button 
          key={item.label}
          onClick={() => handleChange(null, index)}
          sx={{
            backgroundColor: value === index ? '#f0e6ff' : 'transparent',
            '&:hover': {
              backgroundColor: '#f0e6ff',
            },
          }}
        >
          <ListItemText 
            primary={item.label} 
            sx={{
              color: '#6b625a',
              textAlign: 'center',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#f9f9f7',
        boxShadow: 'none',
        padding: { xs: '5px 10px', sm: '10px 20px' },
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
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
              fontSize: { xs: '0.8rem', sm: '1rem' },
              color: '#6b625a',
              marginTop: '-5px',
              fontFamily: 'Inter, Arial, sans-serif',
            }}
          >
            Omicron Chapter
          </Typography>
        </Box>
        
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={() => setMobileOpen(!mobileOpen)}
              sx={{ color: '#6b625a' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile
              }}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '60%',
                  backgroundColor: '#f9f9f7',
                },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            TabIndicatorProps={{ style: { backgroundColor: '#dccff9' } }}
            sx={{
              '& .MuiTab-root': {
                fontWeight: 600,
                fontSize: { xs: '0.8rem', sm: '1rem' },
                color: '#6b625a',
                fontFamily: 'Inter, Arial, sans-serif',
                textTransform: 'none',
                minWidth: { xs: '60px', sm: '80px' },
                padding: { xs: '6px 8px', sm: '12px 16px' },
              },
            }}
          >
            {menuItems.map((item) => (
              <Tab key={item.label} label={item.label} />
            ))}
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}
