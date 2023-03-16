import { createTheme } from '@mui/material/styles';
import { lime } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: lime[900],
    },
  },
});

export default theme;
