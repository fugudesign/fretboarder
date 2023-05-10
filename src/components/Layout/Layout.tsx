import { useMediaQuery, useTheme } from '@mui/material';

import BottomNav from '../BottomNav/BottomNav';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';
import DisplayModeControl from '../controls/DisplayModeControl';
import { FC } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import Navbar from '../Navbar/Navbar';
import ScaleSchema from '../ScaleSchema/ScaleSchema';
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
            <Box  style={{height:'300px', maxWidth: '100hw', overflow: 'auto', paddingTop:'40px'}}>
              <Viewer />
            </Box>
          </Grid>
          <Grid xs={12}>
            <Container maxWidth="lg">
              <Grid xs={12} display="flex" justifyContent="flex-end">
                <DisplayModeControl />
              </Grid>
            </Container>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={isMd ? 5 : 3}>
          <Grid  xs={12} display="flex">
            <ScaleSchema />
          </Grid>
        </Grid>
      </Container>
      <BottomNav />
    </Box>
  );
};
