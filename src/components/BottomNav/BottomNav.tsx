import Container from '@mui/material/Container';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import InstrumentControl from '../controls/InstrumentControl';
import Paper from '@mui/material/Paper';
import TuningControl from '../controls/TuningControl';
import sx from './BottomNav.styles';

const BottomNav: FC = () => {
  return (
    <Paper sx={sx.root} elevation={10}>
      <Container>
        <Grid container spacing={4}>
          <Grid xs={6}>
            <InstrumentControl size="small" />
          </Grid>
          <Grid xs={6}>
            <TuningControl size="small" />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default BottomNav;
