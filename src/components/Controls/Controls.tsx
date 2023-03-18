import Container from '@mui/material/Container';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import ModeControl from './components/ModeControl';
import TonicControl from './components/TonicControl';
import TuningControl from './components/TuningControl';

export const Controls: FC = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <TuningControl />
        </Grid>
        <Grid xs={12} sm={4}>
          <TonicControl />
        </Grid>
        <Grid xs={12} sm={4}>
          <ModeControl />
        </Grid>
      </Grid>
    </Container>
  );
};
