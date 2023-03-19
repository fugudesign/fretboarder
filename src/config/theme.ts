import { lime, purple } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: lime[900],
    },
    secondary: {
      main: purple[500],
    },
  },
  typography: {
    fontFamily: "'Circular Std', sans-serif",
  },
});

export default theme;
