'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Link, Grid } from '@mui/material';
import Slider from 'react-slick'; // For the slider functionality
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Define styles to match your existing design
const sectionStyles = {
  backgroundColor: '#f9f9f7',
  borderRadius: '12px',
  padding: '40px',
  margin: '40px auto',
  maxWidth: '1200px',
  width: '95%',
  boxSizing: 'border-box',
};

const titleStyles = {
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#6b625a',
  textAlign: 'center',
  marginBottom: '30px',
};

const subTextStyles = {
  fontSize: '1.2rem',
  color: '#6b625a',
  lineHeight: '1.8',
  textAlign: 'left',
  marginBottom: '20px',
};

const buttonStyles = {
  backgroundColor: '#6b625a',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '6px',
  fontWeight: 600,
  marginRight: '10px',
  '&:hover': {
    backgroundColor: '#4a4944',
  },
};

export default function RecruitmentPage() {
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true); // To avoid hydration issues for client-only parts
  }, []);

  if (!isMounted) return null;

  // Slider settings for past rush events
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff', padding: '20px 0', minHeight: '100vh' }}>
      {/* Page Title */}
      <Typography sx={titleStyles}>RUSH aKDPhi</Typography>

      {/* WHY aKDPhi Section */}
      <Box sx={sectionStyles}>
        <Typography variant="h2" sx={{ ...subTextStyles, fontWeight: 700 }}>WHY aKDPhi?</Typography>
        <Typography sx={subTextStyles}>
          αΚΔΦ (aKDPhi, or alpha Kappa Delta Phi) is the largest and only international Asian-American interest sorority.
          With nearly 60 active chapters, there is a huge network and support for every sister of aKDPhi. Our five
          pillars include sisterhood, scholarship, leadership, service, and Asian awareness.
        </Typography>
        <Typography sx={subTextStyles}>
          We welcome all those interested to come out to rush aKDPhi this fall and see what we're all about. Info will be posted
          on our Instagram <Link href="https://www.instagram.com/sloakdphi" target="_blank">@sloakdphi</Link> when the time comes!
        </Typography>
      </Box>

      {/* Pictures and Buttons Section */}
      <Box sx={sectionStyles}>
        <Typography variant="h2" sx={{ ...subTextStyles, fontWeight: 700 }}>Interested?</Typography>
        <Typography sx={subTextStyles}>
          Fill out our rush interest form and check out our Instagram below for rush event announcements/updates.
          We can't wait to see you soon!
        </Typography>
        <Box sx={{ textAlign: 'left', marginTop: '20px' }}>
          <Button sx={buttonStyles} href="https://forms.google.com" target="_blank">
            Interest Form
          </Button>
          <Button sx={buttonStyles} href="https://www.instagram.com/sloakdphi" target="_blank">
            Instagram
          </Button>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box sx={sectionStyles}>
        <Typography variant="h2" sx={{ ...subTextStyles, fontWeight: 700 }}>Frequently Asked Questions</Typography>
        <Typography sx={subTextStyles}>
          <strong>Why alpha Kappa Delta Phi?</strong> <br />
          alpha Kappa Delta Phi at Cal Poly is the largest and only international Asian-Interest Sorority on campus.
          It is the fastest-growing sorority with 60 chapters across the US & Canada. However, it is more than just a
          sorority. You gain so many benefits from joining - an everlasting sisterhood where you will always have sisters to
          lean on.
        </Typography>
        {/* Add more FAQ questions here */}
      </Box>

      {/* Past Rush Events Slider */}
      <Box sx={sectionStyles}>
        <Typography variant="h2" sx={{ ...subTextStyles, fontWeight: 700 }}>Past Rush Events</Typography>
        <Slider {...sliderSettings}>
          {[...Array(6)].map((_, i) => (
            <Box key={i} sx={{ padding: '10px' }}>
              <img
                src={`/rush-event-${i + 1}.jpg`}
                alt={`Rush Event ${i + 1}`}
                style={{ width: '100%', borderRadius: '12px' }}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
