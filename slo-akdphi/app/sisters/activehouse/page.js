'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import 'react-multi-carousel/lib/styles.css';

// Dynamically import Carousel to prevent SSR issues
const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

// Example Arrows that remove 'carouselState' prop before passing rest to DOM
const CustomLeftArrow = ({ onClick, carouselState, rtl, ...rest }) => {
  // Destructure and remove `rtl` from the props so it never hits the DOM.
  const { rtl: _rtl, ...arrowProps } = rest; 
  return (
    <div
      {...arrowProps}
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: '#dccff9',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#bcb2f3')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#dccff9')}
    >
      <span style={{ color: '#6b625a', fontSize: '18px' }}>{'<'}</span>
    </div>
  );
};

const CustomRightArrow = ({ onClick, carouselState, rtl, ...rest }) => {
  // Same here: remove `rtl` from the props.
  const { rtl: _rtl, ...arrowProps } = rest;
  return (
    <div
      {...arrowProps}
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '5px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: '#dccff9',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#bcb2f3')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#dccff9')}
    >
      <span style={{ color: '#6b625a', fontSize: '18px' }}>{'>'}</span>
    </div>
  );
};

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
//test
const classes = [
  {
    title: "Winter '25",
    subtitle: 'alpha xi',
    sisters: [
      {
        id: '#177',
        nickname: 'Rasp Ber Ry',
        name: 'Cheyenne',
        lastName: 'Deocares',
        photo: '/sisters/cheyenne.png',
      },
      {
        id: '#178',
        nickname: 'S.A.G.E.',
        name: 'Lindsay',
        lastName: 'Lee',
        photo: '/sisters/lindsay.png',
      },
      {
        id: '#179',
        nickname: 'Comet',
        name: 'Hannah',
        lastName: 'Mored',
        photo: '/sisters/hannah.png',
      },
      {
        id: '#180',
        nickname: 'Black Ber Ry',
        name: 'Carys',
        lastName: 'Nguyen',
        photo: '/sisters/carys.png',
      },
    ],
  },
  {
    title: "Fall '24",
    subtitle: 'alpha nu',
    sisters: [
      {
        id: '#172',
        nickname: 'Wolnuts',
        name: 'Olivia',
        lastName: 'Low',
        photo: '/sisters/olivia.jpg',
      },
      {
        id: '#173',
        nickname: 'mar~ma~lade',
        name: 'Aurora-Marie',
        lastName: 'Munoz',
        photo: '/sisters/aurora.jpg',
      },
      {
        id: '#175',
        nickname: 'K.A.L.O.',
        name: 'Kelly',
        lastName: 'Sung',
        photo: '/sisters/kelly.jpg',
      },
      {
        id: '#176',
        nickname: 'Totoro',
        name: 'Jacie',
        lastName: 'Tram',
        photo: '/sisters/jacie.jpg',
      },
    ],
  },
  {
    title: "Winter '24",
    subtitle: 'alpha mu',
    sisters: [
      {
        id: '#169',
        nickname: 'S.W.A.N.',
        name: 'Abigail',
        lastName: 'Jaromay',
        photo: '/sisters/abby.jpg',
      },
      {
        id: '#170',
        nickname: 'P.U.R.R.',
        name: 'Sara',
        lastName: 'Stone',
        photo: '/sisters/sara.jpg',
      },
    ],
  },
  {
    title: "Fall '23",
    subtitle: 'alpha lambda',
    sisters: [
      {
        id: '#165',
        nickname: 'Andromeda',
        name: 'Haley',
        lastName: 'Hoang',
        photo: '/sisters/haley.jpg',
      },
      {
        id: '#166',
        nickname: 'Bituin',
        name: 'Melindajane',
        lastName: 'Pagaoa',
        photo: '/sisters/mj.jpg',
      },
      {
        id: '#167',
        nickname: 'tigress',
        name: 'Daphne',
        lastName: 'So',
        photo: '/sisters/daphne.jpg',
      },
      {
        id: '#168',
        nickname: 'Straw Bear Ry',
        name: 'Anh',
        lastName: 'Tran',
        photo: '/sisters/anh.jpg',
      },
    ],
  },
  {
    title: "Fall '22",
    subtitle: 'alpha kappa',
    sisters: [
      {
        id: '#160',
        nickname: 'kUroMI',
        name: 'Alice',
        lastName: 'Hanscom',
        photo: '/sisters/sister.jpg',
      },
      {
        id: '#161',
        nickname: 'G.L.O.W.',
        name: 'Rianna',
        lastName: 'Lei',
        photo: '/sisters/rianna.jpg',
      },
      {
        id: '#162',
        nickname: 'NutMeg',
        name: 'Megan',
        lastName: 'Morimoto',
        photo: '/sisters/megan.jpg',
      },
      {
        id: '#164',
        nickname: 'dan i mals',
        name: 'Dani',
        lastName: 'Tran',
        photo: '/sisters/dani.jpg',
      },
    ],
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3.8 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export default function ActiveHousePage() {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div suppressHydrationWarning>Loading...</div>;
  }

  return (
    <Box
      sx={{
        padding: '1rem',
        backgroundColor: '#f9f9f7',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Back to Sisters Button */}
      <Box
        onClick={() => router.push('/sisters')}
        sx={{
          position: 'fixed', // Ensures it's always visible at the top-left
          top: '130px',
          left: '60px',
          zIndex: 1000,
          width: '40px',
          height: '40px',
          backgroundColor: '#dccff9',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#6b625a',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: '#bcb2f3',
          },
        }}
      >
        {'<'}
      </Box>

      {/* Page Header */}
      <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
        <Typography
          variant="h4"
          sx={sectionTitleStyles}
        >
          Active House
        </Typography>
        <Typography sx={subTextStyles}>
          Winter 2025
        </Typography>
      </Box>

      {/* Classes */}
      {classes.map((classGroup, index) => (
        <Box key={index} sx={{ marginBottom: '3rem' }}>
          <Typography
            variant="h5"
            sx={{
              ...sectionTitleStyles,
              textAlign: 'left', // Align to left for titles
              marginBottom: '10px',
            }}
          >
            {classGroup.title}
            <span
              style={{
                color: '#dccff9',
                fontStyle: 'italic',
                fontSize: '1.5rem',
                marginLeft: '10px',
              }}
            >
              {classGroup.subtitle}
            </span>
          </Typography>

          {/* Carousel */}
          <Box sx={{ position: 'relative', padding: '0 10px' }}>
            <Carousel
              responsive={responsive}
              infinite
              showDots={false}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {classGroup.sisters.map((sister, sisterIndex) => (
                <Box
                  key={sisterIndex}
                  sx={{
                    textAlign: 'center',
                    padding: '0 10px',
                    margin: '0 auto',
                  }}
                >
                  <Box
                    component="img"
                    src={sister.photo}
                    alt={sister.name}
                    sx={{
                      width: '240px',
                      height: '240px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      margin: '0 auto',
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: '#6b625a',
                      marginTop: '0.3rem',
                    }}
                  >
                    {sister.id}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: '#dccff9',
                      fontSize: '1rem',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {sister.nickname}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: '#6b625a',
                      fontSize: '1rem',
                    }}
                  >
                    {sister.name}
                  </Typography>
                  <Typography sx={{ color: '#555', fontSize: '1rem' }}>
                    {sister.lastName}
                  </Typography>
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
