import { useMediaQuery, useTheme } from '@mui/material';

import BottomNav from '../BottomNav/BottomNav';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import ModeControl from '../controls/ModeControl';
import Navbar from '../Navbar/Navbar';
import TonicControl from '../controls/TonicControl';
import Viewer from '../Viewer/Viewer';
import sx from './Layout.styles';

export const Layout: FC = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={sx.root}>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2} marginTop={8}>
          <Grid xs={12} display="flex" justifyContent="center">
            <Viewer />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={isMd ? 5 : 3}>
          <Grid xs={12} display="flex">
            <Container>
              <Grid container spacing={2}>
                <Grid xs={12} sm={3}></Grid>
                <Grid xs={12} sm={3}>
                  <TonicControl />
                </Grid>
                <Grid xs={12} sm={3}>
                  <ModeControl />
                </Grid>
                <Grid xs={12} sm={3}></Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <BottomNav />
    </Box>
  );
};
