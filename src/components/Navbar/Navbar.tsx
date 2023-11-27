import { Chip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useAppContext } from 'src/contexts/appContext';
import InstallPrompt from '../InstallPrompt/InstallPrompt';
import sx from './Navbar.styles';

const Navbar: FC = () => {
  const { version, type } = useAppContext();
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
            <Chip sx={sx.version} size="small" label={version} />
          </Box>
          <Box>
            <InstallPrompt />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
