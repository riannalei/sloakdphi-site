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

  const [activePillar, setActivePillar] = useState('sisterhood');

  const pillarDescriptions = {
    sisterhood: {
      title: 'Sisterhood',
      description: 'Joining alpha Kappa Delta Phi means forming lifelong bonds and creating lasting memories. Sisters support each other in personal, academic, and professional pursuits, building strong relationships that go beyond college. Activities like house dates and road trips connect sisters nationwide, fostering growth and unwavering support.',
      image: '/about/about2.jpg',
    },
    leadership: {
      title: 'Leadership',
      description: 'aKDPhi encourages members to grow as leaders through officer roles and responsibilities. Sisters develop skills in organization, communication, and confidence, preparing them for future success.',
      image: '/about/about.jpg',
    },
    scholarship: {
      title: 'Scholarship',
      description: 'Academics are a priority at aKDPhi, with one of the highest GPAs in Cal Poly’s Greek community. Sisters benefit from study hours, shared resources, and a strong support system, alongside opportunities for scholarships and grants.',
      image: '/about/about2.jpg',
    },
    service: {
      title: 'Service',
      description: 'Our philanthropy focuses on Breast Cancer Awareness through workshops, events, and service projects. We also promote Asian American awareness and support the community through volunteer work and fundraisers.',
      image: '/about/about.jpg',
    },
    awareness: {
      title: 'Asian Awareness',
      description: 'As an Asian-interest sorority, aKDPhi promotes Asian Awareness while embracing diversity. We celebrate cultures through events like PolyCultural Weekend, Culture Fest, and Lantern Fest, welcoming members from all backgrounds.',
      image: '/about/about2.jpg',
    },
  };

  return (
    <Box sx={{ padding: '5px 0px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      {/* Chapter President's Welcome Letter */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>A Note From Our President</Typography>
        <Typography sx={subTextStyles}>
          Hello! My name is Joanna Vo, and I am excited to serve as Omicron Chapter&apos;s President for
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
                height: '500px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={pillarDescriptions[activePillar].image}
                alt={pillarDescriptions[activePillar].title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>

          {/* Right Interactive Section */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ textAlign: 'left', height: '220px', overflowY: 'auto' }}>
              <Typography
                sx={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#6b625a',
                  marginBottom: '10px',
                  textAlign: 'left',
                }}
              >
                {pillarDescriptions[activePillar].title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '1rem',
                  color: '#6b625a',
                  lineHeight: '1.6',
                  textAlign: 'left',
                }}
              >
                {pillarDescriptions[activePillar].description}
              </Typography>
            </Box>
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
  <Typography sx={sectionTitleStyles}>National History</Typography>
  <Typography sx={{ ...subTextStyles, mb: 2 }}>
    alpha Kappa Delta Phi was founded at UC Berkeley in 1989 and officially recognized in 1990, 
    creating a space for Asian American women in the Greek system. With a focus on sisterhood, 
    scholarship, leadership, service, and Asian awareness, the sorority has grown to campuses 
    nationwide, empowering women to achieve their goals while fostering lasting bonds.
  </Typography>
  <Typography sx={{ ...sectionTitleStyles, mt: 4 }}>Chapter History</Typography>
  <Typography sx={subTextStyles}>
    The Omicron Chapter at Cal Poly was established in 1996 by six determined women with a 
    vision of creating a supportive community for Asian American women. Dedicated to promoting 
    sisterhood and leadership, our chapter has continued to thrive, embracing new ideas while 
    honoring the strong foundation laid by our founding sisters.
  </Typography>
</Box>


      {/* Facts About aKDPhi */}
<Box sx={containerStyles}>
  <Typography sx={sectionTitleStyles}>Facts About aKDPhi</Typography>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
    {/* Left Side */}
    <Box sx={{ flex: '1 1 50%', minWidth: '300px' }}>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
        <strong>Purpose:</strong> The purpose of alpha Kappa Delta Phi is to promote sisterhood, 
        scholarship, leadership, and Asian Awareness in the University and community, while 
        encouraging the expression of the individual. The sorority is composed of highly motivated 
        women with diverse backgrounds, interests, and fields of study. Each woman, however, shares 
        a strong bond of love, friendship, and sisterhood. With a supportive network of sisters, each 
        woman can strive to fulfill her personal, academic, and career goals.
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
        <strong>Mission:</strong> The sisterhood of alpha Kappa Delta Phi creates a sense of belonging 
        for womxn that nurtures life-long friendships, develops self-empowered leaders, and strengthens 
        communities through service, scholarship, and Asian awareness.
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
        <strong>Vision:</strong> alpha Kappa Delta Phi envisions a worldwide network of respected, confident 
        women who elevate each other and their communities through compassionate, purpose-driven leadership 
        that ensures diversity, encourages innovation, and promotes collaboration.
      </Typography>
    </Box>

    {/* Right Side */}
    <Box sx={{ flex: '1 1 40%', minWidth: '200px' }}>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Creed:</strong> Love and Friendship
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Motto:</strong> &quot;Timeless Friendship Through Sisterhood&quot;
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Colors:</strong> Purple and White
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Symbol:</strong> Hourglass
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Stone:</strong> Diamond
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Mascot:</strong> Phoenix
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Flower:</strong> Iris
      </Typography>
      <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 1 }}>
        <strong>Philanthropy:</strong> Breast Cancer Awareness
      </Typography>
    </Box>
  </Box>
</Box>


    </Box>
  );
}
