import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { neckTypes } from 'src/config/necks';
import sx from './Navbar.styles';
import { useAppContext } from 'src/contexts/appContext';

const Navbar: FC = () => {
  const { type, setType } = useAppContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        component="nav"
        color="primary"
        enableColorOnDark
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fretboarder
          </Typography>
          {neckTypes.map((t) => (
            <Button
              sx={{ color: '#fff', ...sx.button }}
              className={clsx({ active: t === type })}
              key={t}
              onClick={() => setType(t)}
            >
              {t}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
