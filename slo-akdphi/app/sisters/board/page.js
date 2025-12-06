'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const styles = {
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#6b625a',
    letterSpacing: '0.1em',
    marginBottom: '30px',
    textAlign: 'center',
  },
  purpleTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#dccff9',
    letterSpacing: '0.05em',
    marginBottom: '20px',
    textAlign: 'center',
  },
  positionText: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#444444',
    lineHeight: '2',
    textAlign: 'center',
    marginBottom: '10px',
  },
  nameText: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#6b625a',
    textAlign: 'center',
    marginBottom: '15px',
  },
  container: {
    backgroundColor: '#f9f9f7',
    borderRadius: '12px',
    padding: '30px',
    margin: '20px',
    textAlign: 'center',
    flex: 1, // Ensure equal size for both containers
  },
  pageWrapper: {
    backgroundColor: '#ffffff',
    padding: '20px 0',
    minHeight: '100vh',
    position: 'relative',
  },
};

const BoardPage = () => {
  const router = useRouter();

  return (
    <Box sx={styles.pageWrapper}>
      {/* Back Button */}
      <Box
        onClick={() => router.push('/sisters')}
        sx={{
          position: 'absolute',
          top: '50px',
          left: '60px',
          zIndex: 1000,
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#dccff9',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#6b625a',
          '&:hover': {
            backgroundColor: '#bcb2f3',
          },
        }}
      >
        {'<'}
      </Box>

      {/* Page Title */}
      <Typography sx={styles.sectionTitle}>2024 E-Board & Cabinet</Typography>

      {/* Containers Side-by-Side */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap', // Ensure responsive layout for smaller screens
          gap: '0px',
        }}
      >
        {/* Executive Board Container */}
        <Box sx={styles.container}>
          <Typography sx={styles.purpleTitle}>Executive Board</Typography>
          <Typography sx={styles.positionText}>PRESIDENT</Typography>
          <Typography sx={styles.nameText}>Megan Morimoto</Typography>
          <Typography sx={styles.positionText}>VP OF INTERNAL AFFAIRS</Typography>
          <Typography sx={styles.nameText}>Daphne So</Typography>
          <Typography sx={styles.positionText}>VP OF EXTERNAL AFFAIRS</Typography>
          <Typography sx={styles.nameText}>Dani Tran</Typography>
          <Typography sx={styles.positionText}>VP OF SERVICE</Typography>
          <Typography sx={styles.nameText}>OPEN</Typography>
          <Typography sx={styles.positionText}>VP OF NEW MEMBER EDUCATION</Typography>
          <Typography sx={styles.nameText}>Megan Morimoto (Winter 2025)</Typography>
          <Typography sx={styles.positionText}>VP OF TREASURY</Typography>
          <Typography sx={styles.nameText}>Anh Tran</Typography>
          <Typography sx={styles.positionText}>SECRETARY</Typography>
          <Typography sx={styles.nameText}>Sara Stone</Typography>
        </Box>

        {/* Chairs Container */}
        <Box sx={styles.container}>
          <Typography sx={styles.purpleTitle}>Cabinet</Typography>
          <Typography sx={styles.positionText}>RECRUITMENT</Typography>
          <Typography sx={styles.nameText}>Rianna Lei, Kelly Sung (Fall 2025)</Typography>
          <Typography sx={styles.positionText}>OPEN HOUSE</Typography>
          <Typography sx={styles.nameText}>Sara Stone</Typography>
          <Typography sx={styles.positionText}>DIVERSITY, EQUITY, AND INCLUSION</Typography>
          <Typography sx={styles.nameText}>Lindsay Lee</Typography>
          <Typography sx={styles.positionText}>CULTURAL</Typography>
          <Typography sx={styles.nameText}>MJ Pagaoa, Kelly Sung, Cheyenne Deocares</Typography>
          <Typography sx={styles.positionText}>CONTRIBUTION</Typography>
          <Typography sx={styles.nameText}>Haley Hoang</Typography>
          <Typography sx={styles.positionText}>ACADEMICS</Typography>
          <Typography sx={styles.nameText}>Hannah Mored</Typography>
          <Typography sx={styles.positionText}>FUNDRAISER</Typography>
          <Typography sx={styles.nameText}>Aurora-Marie Muñoz, Jacie Tram</Typography>
          <Typography sx={styles.positionText}>SISTERHOOD</Typography>
          <Typography sx={styles.nameText}>Carys Nguyen</Typography>
          <Typography sx={styles.positionText}>DANCE COORDINATORS</Typography>
          <Typography sx={styles.nameText}>MJ Pagaoa, Aurora-Marie Muñoz</Typography>
          <Typography sx={styles.positionText}>ALUMNI RELATIONS</Typography>
          <Typography sx={styles.nameText}>Olivia Low</Typography>
          <Typography sx={styles.positionText}>MEDIA RELATIONS</Typography>
          <Typography sx={styles.nameText}>Daphne So</Typography>
          <Typography sx={styles.positionText}>WEB DEVELOPER</Typography>
          <Typography sx={styles.nameText}>Rianna Lei</Typography>
          <Typography sx={styles.positionText}>VIOLENCE PREVENTION</Typography>
          <Typography sx={styles.nameText}>Alice Hanscom</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BoardPage;
