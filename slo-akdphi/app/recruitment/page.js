'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import Slider from 'react-slick'; // For the slider functionality
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Reuse consistent styles
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

const buttonStyles = {
  backgroundColor: '#6b625a',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '24px',
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
      <Typography sx={sectionTitleStyles}>RUSH aKDPhi</Typography>
      <Typography sx={subTextStyles}>
          Winter 2025 rush coming soon...
        </Typography>

      {/* WHY aKDPhi Section */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>WHY aKDPhi?</Typography>
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

      {/* Two Pictures Section */}
      <Box sx={containerStyles}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <img
            src="/example-image-1.jpg"
            alt="Picture 1"
            style={{ borderRadius: '12px', maxWidth: '45%', height: 'auto' }}
          />
          <img
            src="/example-image-2.jpg"
            alt="Picture 2"
            style={{ borderRadius: '12px', maxWidth: '45%', height: 'auto' }}
          />
        </Box>
      </Box>

      {/* Interested Section */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Interested?</Typography>
        <Typography sx={subTextStyles}>
          Fill out our rush interest form and check out our Instagram below for rush event announcements/updates.
          We can't wait to see you soon!
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button sx={buttonStyles} href="https://forms.google.com" target="_blank">
            Interest Form
          </Button>
          <Button sx={buttonStyles} href="https://www.instagram.com/sloakdphi" target="_blank">
            Instagram
          </Button>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Frequently Asked Questions</Typography>
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
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Past Rush Events</Typography>
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
