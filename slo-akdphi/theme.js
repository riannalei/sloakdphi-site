import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DCCFF9', // Soft pastel purple
    },
    secondary: {
      main: '#F4F4F9', // Light off-white background
    },
    background: {
      default: '#FFFFFF', // Clean white
      paper: '#F9F9FF', // Very light pastel purple for cards/sections
    },
    text: {
      primary: '#4A4A4A', // Dark gray for main text
      secondary: '#6E6E6E', // Medium gray for subtle text
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Elegant and modern
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#4A4A4A',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#4A4A4A',
    },
    body1: {
      fontSize: '1.1rem',
      color: '#6E6E6E',
    },
  },
});

export default theme;
