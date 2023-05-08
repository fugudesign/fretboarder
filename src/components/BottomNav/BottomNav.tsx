import Container from '@mui/material/Container';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import InstrumentControl from '../controls/InstrumentControl';
import ModeControl from '../controls/ModeControl';
import Paper from '@mui/material/Paper';
import TonicControl from '../controls/TonicControl';
import TuningControl from '../controls/TuningControl';
import sx from './BottomNav.styles';

const BottomNav: FC = () => {
  return (
    <Paper sx={sx.root} elevation={10}>
      <Container>
        <Grid container spacing={4}>
          <Grid xs={3}>
            <InstrumentControl size="small" />
          </Grid>
          <Grid xs={3}>
            <TuningControl size="small" />
          </Grid>
          <Grid xs={3}>
            <TonicControl size="small" />
          </Grid>
          <Grid xs={3}>
            <ModeControl size="small" />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default BottomNav;
