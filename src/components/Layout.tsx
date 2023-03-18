import Container from '@mui/material/Container';
import { Controls } from './Controls/Controls';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import GuitarSwitch from './GuitarSwitch/GuitarSwitch';
import Navbar from './Navbar/Navbar';
import Viewer from './Viewer/Viewer';

export const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={5}>
          <Grid xs={12} display="flex" justifyContent="center">
            <GuitarSwitch />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={2} marginTop={5}>
          <Grid xs={12} display="flex" justifyContent="center">
            <Viewer />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={5}>
          <Grid xs={12} display="flex">
            <Controls />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
