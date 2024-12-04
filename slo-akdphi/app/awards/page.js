'use client';

import React from 'react';
import { Box, Typography, Grid, List, ListItem } from '@mui/material';

export default function Awards() {
  const sectionTitleStyles = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#DCCFF9',
  };

  const subTextStyles = {
    fontSize: '1rem',
    color: '#666666',
    lineHeight: '1.5',
  };

  const itemTextStyles = {
    fontSize: '1rem',
    color: '#444444',
    lineHeight: '1.5',
  };

  return (
    <Box sx={{ padding: '50px 20px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Page Header */}
      <Typography
        align="center"
        sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', color: '#DCCFF9' }}
      >
        RECOGNITION
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: '1rem', color: '#666666', marginBottom: '40px', lineHeight: '1.6' }}
      >
        Celebrating our achievements and contributions
      </Typography>

      {/* Dean's List */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography sx={sectionTitleStyles}>Dean's List</Typography>
        <Typography sx={subTextStyles}>
          Congratulations to our sisters who achieved a GPA of 3.50 or higher in the 2023-2024
          school year!
        </Typography>
        <Box sx={{ marginTop: '20px' }}>
          <Typography sx={itemTextStyles}>Megan Morimoto: Dean’s List Fall 2023 & Winter 2024</Typography>
          <Typography sx={itemTextStyles}>Haley Hoang: Dean’s List Fall 2023</Typography>
          <Typography sx={itemTextStyles}>Anh Tran: Dean’s List Fall 2024</Typography>
          <Typography sx={itemTextStyles}>Sara Stone: Dean’s List Winter 2024</Typography>
        </Box>
      </Box>

      {/* Chapter's Scholarship Recognition */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography sx={sectionTitleStyles}>Chapter's Scholarship Recognition</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <List sx={{ padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Fall 2022 - USFC 1st Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Spring 2022 - USFC 2nd Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Winter 2022 - USFC Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Spring 2021 - USFC 2nd Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Winter 2021 - USFC Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Winter 2021 - CP Greek Life Highest GPA</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <List sx={{ padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Fall 2020 - CP Greek Life Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Spring 2020 - USFC Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Fall 2019 - USFC 2nd Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>
                  Fall 2018 - CP Greek Life Unweighted GPA, 2nd Highest
                </Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Spring 2018 - USFC Highest GPA</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Winter 2018 - USFC Highest GPA</Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* University Recognition */}
      <Box sx={{ marginBottom: '40px' }}>
        <Typography sx={sectionTitleStyles}>University Recognition</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <List sx={{ padding: 0 }}>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Spring 2022 - USFC's Academic Excellence Award</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>Spring 2022 - USFC's Philanthropy of the Year</Typography>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Typography sx={itemTextStyles}>
                  Spring 2022 - USFC's Excellence in Unity & Belonging
                </Typography>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Box>

      {/* Individual Recognition */}
      <Box>
        <Typography sx={sectionTitleStyles}>Individual Recognition</Typography>
        <Box sx={{ marginTop: '20px' }}>
          <Typography sx={itemTextStyles}>
            Sally Lee - Southern California aKDPhi IRIS Award Recipient, 2021
          </Typography>
          <Typography sx={itemTextStyles}>
            Anushree Parmar - USFC's Volunteer of the Year, 2022
          </Typography>
          <Typography sx={itemTextStyles}>
            Joanna Vo - FSL Standards of Excellence: New Member of the Year
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
