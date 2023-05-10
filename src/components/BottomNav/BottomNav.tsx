import { useMediaQuery, useTheme } from '@mui/material';

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
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Paper sx={sx.root} elevation={10}>
      <Container>
        <Grid container spacing={2}>
          <Grid xs={isSm ? 3 : 4}>
            <InstrumentControl size="small" />
          </Grid>
          <Grid xs={isSm ? 3 : 8}>
            <TuningControl size="small" />
          </Grid>
          <Grid xs={isSm ? 3 : 4}>
            <TonicControl size="small" />
          </Grid>
          <Grid xs={isSm ? 3 : 8}>
            <ModeControl size="small" />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default BottomNav;
