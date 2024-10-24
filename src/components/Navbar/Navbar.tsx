import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useAppContext } from 'src/contexts/appContext';
import InstallButton from '../InstallButton/InstallButton';
import sx from './Navbar.styles';

const Navbar: FC = () => {
  const { type } = useAppContext();
  const backgroundImage = `/images/${type}-bg.png`;

  return (
    <Box sx={sx.root}>
      <AppBar
        position="fixed"
        component="nav"
        color="primary"
        enableColorOnDark
      >
        <Box
          sx={{
            ...sx.background,
            backgroundImage: `url("${backgroundImage}")`,
          }}
        />
        <Toolbar sx={sx.toolbar}>
          <Box sx={sx.left}>
            <Typography component="div" sx={sx.brand}>
              FretBoarder
            </Typography>
          </Box>
          <Box>
            <InstallButton variant="contained">Install</InstallButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
