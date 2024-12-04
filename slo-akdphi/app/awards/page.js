'use client';

import React from 'react';
import { Box, Typography, Divider, Grid, Paper } from '@mui/material';

export default function Awards() {
  const sectionStyles = {
    padding: '20px',
    margin: '20px 0',
    backgroundColor: '#F9F6FF',
    borderRadius: '10px',
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Recognition
      </Typography>

      {/* Dean's List Section */}
      <Paper elevation={2} style={sectionStyles}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Dean's List
        </Typography>
        <Typography>
          Congratulations to our sisters who achieved a GPA of 3.50 or higher in the 2023-2024 school year!
        </Typography>
        <ul>
          <li>Megan Morimoto: Dean’s List Fall 2023 & Winter 2024</li>
          <li>Haley Hoang: Dean’s List Fall 2023</li>
          <li>Anh Tran: Dean’s List Fall 2024</li>
          <li>Sara Stone: Dean’s List Winter 2024</li>
        </ul>
      </Paper>

      {/* Chapter's Scholarship Recognition */}
      <Paper elevation={2} style={sectionStyles}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Chapter's Scholarship Recognition
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ul>
              <li>Fall 2022 - USFC 1st Highest GPA</li>
              <li>Spring 2022 - USFC 2nd Highest GPA</li>
              <li>Winter 2022 - USFC Highest GPA</li>
              <li>Spring 2021 - USFC 2nd Highest GPA</li>
              <li>Winter 2021 - USFC Highest GPA</li>
              <li>Winter 2021 - CP Greek Life Highest GPA</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>Fall 2020 - CP Greek Life Highest GPA</li>
              <li>Fall 2020 - USFC Highest GPA</li>
              <li>Spring 2020 - USFC Highest GPA</li>
              <li>Fall 2019 - USFC 2nd Highest GPA</li>
              <li>Fall 2018 - CP Greek Life Unweighted GPA, 2nd Highest</li>
              <li>Spring 2018 - USFC Highest GPA</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>

      {/* University Recognition */}
      <Paper elevation={2} style={sectionStyles}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          University Recognition
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ul>
              <li>Spring 2022 - USFC's Academic Excellence Award</li>
              <li>Spring 2022 - USFC's Philanthropy of the Year</li>
              <li>Spring 2022 - USFC’s Excellence in Unity & Belonging</li>
              <li>Spring 2022 - USFC’s Excellence in Safety & Risk Management</li>
              <li>Spring 2022 - USFC’s Excellence in Diversity, Equity, & Inclusion</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>Spring 2021 - Most Improved Chapter</li>
              <li>Spring 2021 - USFC’s Excellence in Safety & Risk Management</li>
              <li>Spring 2020 - USFC's Excellence in Scholarship & Learning</li>
              <li>Spring 2023 - FSL Standards of Excellence: Philanthropy Event of the Year</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>

      {/* Individual Recognition */}
      <Paper elevation={2} style={sectionStyles}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Individual Recognition
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <ul>
              <li>Sally Lee - Southern California aKDPhi IRIS Award Recipient, 2021</li>
              <li>Sally Lee - USFC's Silent Leader of the Year, 2022</li>
              <li>Anushree Parmar - USFC's Volunteer of the Year, 2022</li>
              <li>Hannah Aksamit - USFC's Advisor of the Year, 2021</li>
              <li>Samantha Koyama - USFC's President of the Year, 2021</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>Michelle Shuen - Southern California aKDPhi IRIS Award Recipient, 2020</li>
              <li>Nami Saito - FSL Standards of Excellence: Chapter President of the Year</li>
              <li>Kathy Ly - Honorary Award: Inspiring Role Model</li>
              <li>Megan Morimoto - In Recognition of Inspirational Sisterhood (I.R.I.S award)</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
