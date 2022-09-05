import { createTheme } from '@mui/material/styles';

const headingTypeface = 'Anson';
const bodyTypeface = 'Anson';
const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  palette: {
    primary: {
      main: '#66FCF1'
    },
    secondary: {
      main: '#FFF'
    },
    text: {
      primary: '#C5C6C7',
      secondary: '#66FCF1'
    },
    background: {
      paper: '#1F2833',
      default: '#0B0C10'
    }
  },
  typography: {
    fontFamily: bodyTypeface,
    button: {
      fontFamily: bodyTypeface,
      fontWeight: 200,
      fontSize: '1.175rem',
      textTransform: 'none'
    },
    h1: {
      fontFamily: headingTypeface,
      fontWeight: 500,
      fontSize: '4rem'
    },
    h2: {
      fontFamily: headingTypeface,
      fontWeight: 200,
      fontSize: '2.5rem'
    },
    h3: {
      fontFamily: headingTypeface,
      fontWeight: 200,
      fontSize: '1.625rem'
    },
    h4: {
      fontFamily: bodyTypeface,
      fontWeight: 400,
      fontSize: '1.175rem'
    },
    body1: {
      fontFamily: bodyTypeface,
      fontWeight: 400,
      fontSize: '1.25rem'
    },
    body2: {
      fontFamily: bodyTypeface,
      fontWeight: 400,
      fontSize: '1rem'
    }
  }
});

export default defaultTheme;
