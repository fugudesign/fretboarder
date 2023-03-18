import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { FC } from 'react';
import clsx from 'clsx';
import { neckTypes } from 'src/config/necks';
import sx from './GuitarSwitch.styles';
import { useAppContext } from 'src/contexts/appContext';

const GuitarSwitch: FC = () => {
  const { type, setType } = useAppContext();

  return (
    <ButtonGroup variant="outlined">
      {neckTypes.map((t) => (
        <Button
          sx={{ color: '#fff', ...sx.button }}
          className={clsx({ active: t === type })}
          {...(t === type ? { variant: 'contained' } : {})}
          key={t}
          onClick={() => setType(t)}
        >
          {t}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default GuitarSwitch;
