import { useMediaQuery, useTheme } from '@mui/material';

import Container from '@mui/material/Container';
import { Controls } from './Controls/Controls';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import GuitarSwitch from './GuitarSwitch/GuitarSwitch';
import Navbar from './Navbar/Navbar';
import Viewer from './Viewer/Viewer';

export const Layout: FC = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={isMd ? 5 : 2}>
          <Grid xs={12} display="flex" justifyContent="center">
            <GuitarSwitch />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2} marginTop={isMd ? 5 : 3}>
          <Grid xs={12} display="flex" justifyContent="center">
            <Viewer />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={isMd ? 5 : 3}>
          <Grid xs={12} display="flex">
            <Controls />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
