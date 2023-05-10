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
import clsx from 'clsx';
import sx from './Layout.styles';

export const Layout: FC = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={sx.root}>
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={2} marginBottom={isMd ? 8 : 2}>
          <Grid xs={12}>
            <Container maxWidth="lg">
              <Grid
                xs={12}
                display="flex"
                justifyContent="flex-end"
                padding={0}
              >
                <DisplayModeControl />
              </Grid>
            </Container>
          </Grid>
          <Grid xs={12} display="flex" justifyContent="center">
            <Box className="scroller">
              <Box
                className={clsx('viewerAdapt', { isSm, isMd })}
                sx={sx.mobileAdapt}
              >
                <Viewer />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop={isMd ? 5 : 3}>
          <Grid xs={12} display="flex">
            <Box
              className={clsx('scaleSchemaAdapt', { isSm, isMd })}
              sx={sx.mobileAdapt}
            >
              <ScaleSchema />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <BottomNav />
    </Box>
  );
};
