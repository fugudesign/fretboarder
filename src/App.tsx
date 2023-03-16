import { ThemeProvider, createTheme } from '@mui/material/styles';

import { AppContextProvider } from './contexts/appContext';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/system/Unstable_Grid';
import Navbar from 'src/components/Navbar/Navbar';
import Viewer from 'src/components/Viewer/Viewer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="xl">
          <Grid container spacing={2} marginTop={2}>
            <Grid xs display="flex" justifyContent="center">
              <Viewer />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
