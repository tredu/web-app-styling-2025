// src/app/theme.js
import { createTheme } from '@mui/material/styles';


// Import Google Fonts (Fira Mono as an example)
if (typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#DC143C',
    },
    secondary: {
      main: '#9c27b0',
    },
  },
  typography: {
    fontFamily: 'Fira Mono, monospace',
  },
});

export default theme;