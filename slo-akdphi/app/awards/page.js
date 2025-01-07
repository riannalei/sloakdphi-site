'use client';

import React from 'react';
import { Box, Typography, Grid, List, ListItem, Divider } from '@mui/material';

export default function AwardsPage() {
  const sectionTitleStyles = {
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#6b625a',
    letterSpacing: '0.05em',
  };

  const subTextStyles = {
    fontSize: '1rem',
    color: '#6b625a',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  const itemTextStyles = {
    fontSize: '1rem',
    color: '#444444',
    lineHeight: '1.5',
    marginBottom: '10px',
  };

  const containerStyles = {
    backgroundColor: '#f9f9f7',
    borderRadius: '12px',
    padding: '40px',
    margin: '40px auto',
    maxWidth: '2000px',
    width: '100%',
    textAlign: 'center',
  };

  return (
    <Box
      sx={{
        padding: '0 20px',
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Box sx={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Page Header */}
        <Typography
          align="center"
          sx={{
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '30px',
            color: '#6b625a',
            letterSpacing: '0.1em',
          }}
        >
          Recognition
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: '1.1rem',
            color: '#6b625a',
            marginBottom: '40px',
            lineHeight: '1.6',
          }}
        >
          Celebrating our achievements and contributions
        </Typography>

        {/* Modal Styling */}
        <Box sx={containerStyles}>
          {/* Dean's List */}
          <Box sx={{ marginBottom: '40px' }}>
            <Typography sx={sectionTitleStyles}>Dean&apos;s List</Typography>
            <Typography sx={subTextStyles}>
              Congratulations to our sisters who achieved a GPA of 3.50 or higher in the 2023-2024 school year!
            </Typography>
            <Box>
              <Typography sx={itemTextStyles}>Megan Morimoto: Dean&apos;s List Fall 2023 & Winter 2024</Typography>
              <Typography sx={itemTextStyles}>Haley Hoang: Dean&apos;s List Fall 2023</Typography>
              <Typography sx={itemTextStyles}>Anh Tran: Dean&apos;s List Fall 2024</Typography>
              <Typography sx={itemTextStyles}>Sara Stone: Dean&apos;s List Winter 2024</Typography>
            </Box>
          </Box>

          <Divider sx={{ borderColor: '#ccc', marginBottom: '40px' }} />

          {/* Chapter's Scholarship Recognition */}
          <Box sx={{ marginBottom: '40px' }}>
            <Typography sx={sectionTitleStyles}>Chapter&apos;s Scholarship Recognition</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Fall 2022 - USFC 1st Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2022 - USFC 2nd Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Winter 2022 - USFC Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2021 - USFC 2nd Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Winter 2021 - USFC Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Winter 2021 - CP Greek Life Highest GPA</Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Fall 2020 - CP Greek Life Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2020 - USFC Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Fall 2019 - USFC 2nd Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Fall 2018 - CP Greek Life Unweighted GPA, 2nd Highest</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2018 - USFC Highest GPA</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Winter 2018 - USFC Highest GPA</Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ borderColor: '#ccc', marginBottom: '40px' }} />

          {/* University Recognition */}
          <Box sx={{ marginBottom: '40px' }}>
            <Typography sx={sectionTitleStyles}>University Recognition</Typography>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <List>
                <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2024 - USFC&apos;s Philanthropic Excellence</Typography>
                  </ListItem>
                <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2024 - FSL Standards of Excellence in DE&apos;I</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2023 - USFC&apos;s Philanthropic Excellence</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2023 - FSL Standards of Excellence in Safety Risk & Management</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2023 - FSL Standards of Excellence: Philanthropy Event of the Year - Breast Cancer Awareness</Typography>
                  </ListItem>
                </List>
              </Grid>
            <Grid item xs={12} sm={6}>
                <List>
                <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2023 - USFC&apos;s Academic Excellence Award</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2022 - USFC&apos;s Academic Excellence Award</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2022 - USFC&apos;s Philanthropy of the Year</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography sx={itemTextStyles}>Spring 2022 - USFC&apos;s Excellence in Unity & Belonging</Typography>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ borderColor: '#ccc', marginBottom: '40px' }} />

          {/* Individual Recognition */}
          <Box>
            <Typography sx={sectionTitleStyles}>Individual Recognition</Typography>
            <Box>
              <Typography sx={itemTextStyles}>
                Sally Lee - Southern California aKDPhi IRIS Award Recipient, 2021
              </Typography>
              <Typography sx={itemTextStyles}>
                Anushree Parmar - USFC&apos;s Volunteer of the Year, 2022
              </Typography>
              <Typography sx={itemTextStyles}>
                Joanna Vo - FSL Standards of Excellence: New Member of the Year
              </Typography>
              <Typography sx={itemTextStyles}>
                Hannah Le - In Recognition of Inspirational Sisterhood (I.R.I.S award)
              </Typography>
              <Typography sx={itemTextStyles}>
                Megan Morimoto - In Recognition of Inspirational Sisterhood, 2024 (I.R.I.S award)
              </Typography>
              <Typography sx={itemTextStyles}>
              Joanna Vo - Sorority Member of the Year
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
