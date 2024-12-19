'use client';

import React, { useState } from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';

export default function AboutPage() {
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
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const containerStyles = {
    backgroundColor: '#f9f9f7',
    borderRadius: '12px',
    padding: '40px',
    margin: '40px auto',
    maxWidth: '2000px',
    width: '95%',
    textAlign: 'center',
  };

  const linkStyles = {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#6b625a',
    cursor: 'pointer',
    padding: '10px 0',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: '#4a4944',
    },
  };

  const [activePillar, setActivePillar] = useState('sisterhood');

  const pillarDescriptions = {
    sisterhood: {
      title: 'Sisterhood',
      description:
        'By joining alpha Kappa Delta Phi, sisters form lifelong relationships. Sisterhood gives us a strong support system for personal, professional, or academic pursuits.',
      image: '/about/about2.jpg',
    },
    leadership: {
      title: 'Leadership',
      description:
        'We encourage members to explore leadership by taking officer roles, challenging themselves, and building confidence and communication skills.',
      image: '/about/about.jpg',
    },
    scholarship: {
      title: 'Scholarship',
      description:
        'We prioritize academics with strong support networks, study hours, and resources. Our sisters excel academically while pursuing their goals.',
      image: '/about/about2.jpg',
    },
    service: {
      title: 'Service',
      description:
        'We focus on community service, with a national emphasis on Breast Cancer Awareness and local efforts to aid the Asian American community.',
      image: '/about/about.jpg',
    },
    awareness: {
      title: 'Asian Awareness',
      description:
        'We promote Asian Awareness through events like PolyCultural Weekend, Culture Fest, and more, welcoming members from all backgrounds.',
      image: '/about/about2.jpg',
    },
  };

  return (
    <Box sx={{ padding: '5px 0px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Chapter President's Welcome Letter */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>A Note From Our President</Typography>
        <Typography sx={subTextStyles}>
          Hello! My name is Joanna Vo, and I am excited to serve as Omicron Chapter's President for
          the 2024 year. I am eternally grateful for everything aKDPhi has given me and am honored
          to give back to the community that nurtured me.
        </Typography>
        <Typography sx={subTextStyles}>
          As you browse our website, I hope you consider reaching out to us through our connect tab.
          So many memories are waiting to be made!
        </Typography>
        <Typography sx={{ ...subTextStyles, padding: '20px', textAlign: 'center', fontStyle: 'italic' }}>
          Love and Friendship,<br />Joanna Vo
        </Typography>
      </Box>

      {/* Five Pillars Section */}
      <Box sx={containerStyles}>
  <Grid container spacing={4}>
    {/* Left Image */}
    <Grid item xs={12} sm={6}>
    <Box
  sx={{
    width: '100%',
    height: '400px', // Fixed height for the container
    borderRadius: '12px', // Rounded corners for the container
    overflow: 'hidden', // Ensures the image doesn't overflow
  }}
>
  <Box
    component="img"
    src={pillarDescriptions[activePillar].image}
    alt={pillarDescriptions[activePillar].title}
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensures the image covers the container completely
    }}
  />
</Box>



    </Grid>

    {/* Right Interactive Section */}
    <Grid item xs={12} sm={6}>
      <Box sx={{ textAlign: 'left', height: '220px', overflowY: 'auto'  }}>
        {/* Title */}
        <Typography 
          sx={{
            fontSize: '2rem', // Original size for consistency
            fontWeight: 700,
            color: '#6b625a',
            marginBottom: '10px',
            ...sectionTitleStyles,
            textAlign: 'left',
          }}
        >
          {/* <Typography sx={subTextStyles}>{pillarDescriptions[activePillar].description}</Typography> */}
          {pillarDescriptions[activePillar].title}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#6b625a',
            lineHeight: '1.6',
            ...subTextStyles,
            textAlign: 'left',
          }}
        >
          {pillarDescriptions[activePillar].description}
        </Typography>
      </Box>

      {/* Divider */}
      {/* <Divider sx={{ margin: '20px auto', width: '80%', borderColor: '#ccc' }} /> */}

      {/* Interactive Links */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {Object.keys(pillarDescriptions).map((pillar, index) => (
          <React.Fragment key={pillar}>
            <Typography
              onMouseEnter={() => setActivePillar(pillar)}
              sx={{
                fontSize: '1rem',
                fontWeight: activePillar === pillar ? 700 : 400,
                color: activePillar === pillar ? '#6b625a' : '#888888',
                marginY: '10px',
                cursor: 'pointer',
                fontSize: '1.0rem',
                color: '#6b625a',
                lineHeight: '1.6',
                textDecoration: activePillar === pillar ? 'underline' : 'none',
              }}
            >
              {pillarDescriptions[pillar].title}
            </Typography>
            {index < Object.keys(pillarDescriptions).length - 1 && (
              <Divider sx={{ margin: '5px auto', width: '100%', borderColor: '#ddd' }} />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Grid>
  </Grid>
</Box>


      {/* History Section */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Our History</Typography>
        <Typography sx={subTextStyles}>
          alpha Kappa Delta Phi was established at the University of California, Berkeley in 1989,
          spreading sisterhood, scholarship, leadership, service, and Asian Awareness across
          prominent universities nationwide. At Cal Poly, Omicron Chapter was founded in 1996 by six
          women with a vision to create a supportive community for Asian American women.
        </Typography>
      </Box>

      {/* Facts About aKDPhi */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Facts About aKDPhi</Typography>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Typography sx={subTextStyles}><strong>Purpose:</strong> The purpose of alpha Kappa Delta Phi is to promote sisterhood, scholarship, leadership, and Asian Awareness in the University and community.</Typography>
          <Typography sx={subTextStyles}><strong>Creed:</strong> Love and Friendship</Typography>
          <Typography sx={subTextStyles}><strong>Motto:</strong> "Timeless Friendship Through Sisterhood"</Typography>
          <Typography sx={subTextStyles}><strong>Colors:</strong> Purple and White</Typography>
          <Typography sx={subTextStyles}><strong>Symbol:</strong> Hourglass</Typography>
          <Typography sx={subTextStyles}><strong>Stone:</strong> Diamond</Typography>
          <Typography sx={subTextStyles}><strong>Mascot:</strong> Phoenix</Typography>
          <Typography sx={subTextStyles}><strong>Vision:</strong> A worldwide network of respected, confident women elevating their communities through leadership.</Typography>
          <Typography sx={subTextStyles}><strong>Flower:</strong> Iris</Typography>
          <Typography sx={subTextStyles}><strong>Philanthropy:</strong> Breast Cancer Awareness</Typography>
        </Box>
      </Box>
    </Box>
  );
}
