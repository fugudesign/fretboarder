import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import necks from 'src/config/necks';
import { useAppContext } from 'src/contexts/appContext';

type Props = Record<string, never>;

const neckTypes = Object.keys(necks) as NeckType[];

const Navbar: FC = (props: Props) => {
  const { type, setType } = useAppContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fretboarder
          </Typography>
          {neckTypes.map((t) => (
            <Button
              sx={{ color: t === type ? 'primary' : '#fff' }}
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
