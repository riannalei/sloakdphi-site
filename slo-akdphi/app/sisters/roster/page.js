'use client';

import React from 'react';
import { Box, Typography, Button, List, ListItem } from '@mui/material';
import { useRouter } from 'next/navigation';


export default function ChapterRosterPage() {
  const router = useRouter();

  const sectionTitleStyles = {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#6b625a',
    textAlign: 'center',
  };

  const itemTextStyles = {
    fontSize: '0.9rem',
    color: '#444444',
    lineHeight: '1.4',
  };

  return (
    <Box
  sx={{
    position: 'relative',
    padding: '20px',
    backgroundColor: '#ffffff',
    minHeight: '100vh',
  }}
    >
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




      {/* Page Header */}
      <Typography
        align="center"
        sx={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '60px',
          color: '#6b625a',
          letterSpacing: '0.15em',
        }}
      >
        Chapter Roster
      </Typography>

      {/* Roster Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '0 20px',
        }}
      >
        {Object.entries(rosterData).map(([group, members], index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#f9f9f7',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <Typography sx={sectionTitleStyles}>{group}</Typography>
            <List>
              {members.map((member, i) => (
                <ListItem
                  key={i}
                  disableGutters
                  sx={{
                    justifyContent: 'center',
                    padding: '0',
                  }}
                >
                  <Typography sx={itemTextStyles}>{member}</Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const rosterData = {
  CHARTER: [
    'Anh Le Ly',
    'Phoebe Buenavides Malabuyo',
    'Christine Marie Songco',
    'Theresa Tang',
    'Sharon Yan Wong',
    'Nikki Yee',
  ],
  ALPHA: [
    'Esther Kim',
    'Jennifer Nicole Louie',
    'Cynthia Leigh Rivera',
    'Lisa Marie Santos',
  ],
  BETA: [
    'Carmen Chang',
    'Jacquelyn Coo',
    'Loan Xuan Nguyen',
    'Lori Ann Paule Santos',
  ],
  GAMMA: [
    'Jennifer Kay Luu',
    'Monica Marie Saldivar',
    'Lisandry Salgado',
    'Ei-lun Tsai',
  ],
  'DELTA CLASS': [
    'Joahnna Canuday Palac',
    'Connie Wong',
    'Carol Jane Macalintal Romero',
    'Maria Azenith Ledesma Smith',
  ],
  ZETA: ['Amy Hutputtanasin', 'Nga Thi Huynh'],
  ETA: [
    'Christina Agudelo',
    'Kathleen Canda',
    'Terry Duong',
    'Alena Kwong',
    'Danielle Nakamatsu',
    'Wendy Nguyen',
    'Irene Songco',
    'Gina Tsai',
    'Mala Vang',
    'Sarah Yoo',
  ],
  THETA: ['Priscilla Bennette', 'Stephanie Cheng', 'Marissa Nakano', 'Christine Nasol'],
  IOTA: [
    'Joanna Chong',
    'Tina Mai',
    'Crystal Dawn Milsap',
    'Kathy Dung Thi My Nguyen',
    'Alison Sachiko Yim',
  ],
  KAPPA: ['Miho Maezawa', 'Stephanie So'],
  LAMBDA: ['Jennifer Gau'],
  MU: ['Tiffani Nguyen', 'Heather Suguitan'],
  NU: ['Charis Chan', 'Emily Leung', 'Jamie Nguyen', 'Nicola Vizcarra'],
  XI: ['Marissa Chin', 'Randi Gumacal'],
  OMICRON: ['Sarah Chan', 'Cindy Cheng', 'Lauren Kang', 'Lia Lim', 'Samantha Ng'],
  PI: ['Katherine Chang', 'Danielle Lam', 'Nicole Peng', 'Carolyn Tran'],
  RHO: ['Megan Leung', 'Van Nguyen', 'Calista Randazzo', 'Princess Rivera', 'Jessica Tu'],
  SIGMA: [
    'Andrea Kang',
    'Dina Kim',
    'Celine Lee',
    'Kristen Nguyen',
    'Cecily Wong',
  ],
  TAU: [
    'Daphne Chang',
    'Elena Harada',
    'Cheryl Ng',
    'Kimmy Ota',
    'Stephanie Winyuwongse',
  ],
  UPSILON: ['Anna Fong', 'Jessica Siu', 'Emily Yang'],
  PHI: [
    'Peggy Chiang',
    'Lianne Chun',
    'Alice Jang',
    'April Kim',
    'Stefanie Lee',
    'My Phan',
    'Angela Yoeurng',
    'Susanna Yu',
  ],
  CHI: [
    'Angelica Cayabyab',
    'Harmony Chen',
    'Cindy Cheng',
    'Kathy Ha',
    'Meghan Lee',
    'Mia Lin',
    'Leah Pichay',
    'Jenny Tang',
  ],
  PSI: ['Chae Kwon', 'Lisa Li', 'Jenny Tran'],
  'ALPHA ALPHA': [
    'Kelly Huynh',
    'Katheryn Li',
    'Kathy Nguyen',
    'Vivian Nguyen',
    'Brenda Tang',
  ],
  'ALPHA BETA': [
    'Tiffany Ching',
    'Alyx Jeong',
    'Carrie Liu',
    'Kirstyn Middo',
  ],
  'ALPHA GAMMA': [
    'Emily Chang',
    'Samantha Koyama',
    'Cynthia Lee',
    'Yasminh Lu',
    'Kayla Nguyen',
    'Leia Tashiro',
  ],
  'ALPHA DELTA': [
    'Michelle Chen',
    'Emily Shih',
    'Michelle Shuen',
    'Emily Sun',
    'Kelly Wong',
  ],
  'ALPHA EPSILON': [
    'Khanhthy Le',
    'Sally Lee',
    'Nami Saito',
    'Megan Tran',
  ],
  'ALPHA ZETA': ['Alice Cao', 'Anushree Parmar'],
  'ALPHA ETA': [
    'Alice Antony',
    'Elaine Cheng',
    'Hannah Le',
    'Kathy Ly',
    'Karlee Nakamura',
  ],
  'ALPHA THETA': [
    'Annes Huynh',
    'Bonnie Yee',
  ],
  'ALPHA IOTA': [
    'Kat Hsiang',
    'Lieyoung Jin',
    'Maya Peterson',
    'Kelly Tang',
    'Joanna Vo',
  ],
  'ALPHA KAPPA': [
    'Alice Hanscom',
    'Rianna Lei',
    'Megan Morimoto',
    'Danielle Therese Palacpac',
    'Dani Tran',
  ],
  'ALPHA LAMBDA': [
    'Haley Hoang',
    'Melindajane Pagaoa',
    'Daphne So',
    'Anh Tran',
  ],
  'ALPHA MU': [
    'Abigail Jaromay',
    'Sara Stone',
  ],
  'ALPHA NU': [
    'Jasmine Buenafe',
    'Olivia Low',
    'Aurora-Marie Munoz',
    'Kelly Sung',
    'Jacie Tram',
  ],
};
