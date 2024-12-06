// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', // Avoid uppercase for a modern look
    },
  },
});

export default theme;
