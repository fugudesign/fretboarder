import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import { FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import sx from './Navbar.styles';
import { useAppContext } from 'src/contexts/appContext';

const Navbar: FC = () => {
  const { version, type } = useAppContext();
  const backgroundImage = `/images/${type}-bg.png`;

  return (
    <Box sx={sx.root}>
      <AppBar
        position="static"
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
