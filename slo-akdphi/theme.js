// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#dccff9', // Pastel purple for Rhode-inspired style
    },
    background: {
      default: '#fafafa', // Off-white background
    },
    text: {
      primary: '#333', // Neutral black for readability
      secondary: '#555', // Muted gray for supporting text
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
      },
    },
    button: {
      textTransform: 'none', // Avoid uppercase for a modern look
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '16px',
          '@media (min-width:600px)': {
            padding: '24px',
          },
        },
      },
    },
  },
});

export default theme;
