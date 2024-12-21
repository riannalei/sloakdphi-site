'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Link } from '@mui/material';
import Slider from 'react-slick'; // For the slider functionality
import Image from 'next/image'; // For optimized images
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
          &alpha;&Kappa;&Delta;&Phi; (aKDPhi, or alpha Kappa Delta Phi) is the largest and only international Asian-American interest sorority.
          With nearly 60 active chapters, there is a huge network and support for every sister of aKDPhi. Our five
          pillars include sisterhood, scholarship, leadership, service, and Asian awareness.
        </Typography>
        <Typography sx={subTextStyles}>
          We welcome all those interested to come out to rush aKDPhi this fall and see what we&apos;re all about. Info will be posted
          on our Instagram <Link href="https://www.instagram.com/sloakdphi" target="_blank">@sloakdphi</Link> when the time comes!
        </Typography>
      </Box>

      {/* Two Pictures Section */}
      <Box sx={containerStyles}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Image
            src="/recruitment/rush1.jpeg"
            alt="Picture 1"
            layout="intrinsic"
            width={500}
            height={300}
            style={{ borderRadius: '12px', objectFit: 'cover' }}
          />
          <Image
            src="/recruitment/rush1.jpeg"
            alt="Picture 2"
            layout="intrinsic"
            width={500}
            height={300}
            style={{ borderRadius: '12px', objectFit: 'cover' }}
          />
        </Box>
      </Box>

      {/* Interested Section */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Interested?</Typography>
        <Typography sx={subTextStyles}>
          Fill out our rush interest form and check out our Instagram below for rush event announcements/updates.
          We can&apos;t wait to see you soon!
        </Typography>
        <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
          <Button sx={buttonStyles} href="https://docs.google.com/forms/d/e/1FAIpQLSetHEecMCWPWzKddLkrBe4rVqfEAz4uZBjWT4pA1P_-aHp1Iw/viewform?usp=send_form" target="_blank">
            Interest Form
          </Button>
          <Button sx={buttonStyles} href="https://www.instagram.com/sloakdphi" target="_blank">
            Instagram
          </Button>
        </Box>
      </Box>

      {/* Past Rush Events Slider */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Past Rush Events</Typography>
        <Slider {...sliderSettings}>
          {['fall22.PNG', 'fall23.png', 'winter23.png', 'winter24.jpeg'].map((fileName, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                width: '100%',
                aspectRatio: '16/9',
                padding: '10px',
              }}
            >
              <Image
                src={`/recruitment/${fileName}`}
                alt={`Rush Event ${fileName}`}
                fill
                style={{
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
                unoptimized
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* FAQ Section */}
      <Box sx={containerStyles}>
        <Typography sx={sectionTitleStyles}>Frequently Asked Questions</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 4 }}>
          {/* Column 1 */}
          <Box sx={{ flex: '1 1 48%', minWidth: '300px' }}>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>Why alpha Kappa Delta Phi?</strong><br />
              alpha Kappa Delta Phi at Cal Poly is the largest and only international Asian-Interest Sorority on campus. With 60 chapters across the US &amp; Canada, it offers lifelong sisterhood, leadership opportunities, and memorable experiences, along with the chance to give back through service and philanthropic events.
            </Typography>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>What is rush?</strong><br />
              Rush is a week-long period, typically during Fall or Winter Quarter, where students can learn about aKDPhi, meet members, and experience Greek life through fun events. There&apos;s no obligation to join, and it&apos;s free.
            </Typography>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>What should I expect at a rush event?</strong><br />
              Rush Week events give you the opportunity to meet our sisters and get to know what makes aKDPhi unique. These casual and welcoming events allow you to ask questions, meet new people, and learn more about the sorority in a relaxed environment.
            </Typography>
          </Box>

          {/* Column 2 */}
          <Box sx={{ flex: '1 1 48%', minWidth: '300px' }}>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>How do I &quot;rush&quot;?</strong><br />
              Attend one or more rush events during Rush Week. Details can be found on our rush flyer or Instagram.
            </Typography>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>Do I have to be Asian?</strong><br />
              aKDPhi is open to everyone! While we emphasize Asian Awareness, we celebrate diversity and welcome members from all backgrounds.
            </Typography>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>Will rushing cost me anything?</strong><br />
              No, rushing aKDPhi is completely free! Food, transportation, and events are covered by the sorority.
            </Typography>
            <Typography sx={{ ...subTextStyles, fontSize: '0.875rem', mb: 2 }}>
              <strong>What is after rush?</strong><br />
              After rush, you can sign up for an interview. If you&apos;re offered a bid and accept, you&apos;ll begin the new member process, which introduces you to the traditions and history of aKDPhi while building strong bonds with your class and actives.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
