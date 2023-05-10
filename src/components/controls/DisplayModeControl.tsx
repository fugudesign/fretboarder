import { DisplayMode } from 'src/config/displayModes';
import { FC } from 'react';
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { useAppContext } from 'src/contexts/appContext';
import wording from 'src/config/wording';

const sx = {
  root: {
    display: 'flex',
    '& .MuiSwitch-switchBase:not(.Mui-checked) .MuiSwitch-thumb': {
      bgcolor: 'grey.600',
    },
  },
  switchLabel: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontSize: {
      xs: '0.6em',
      md: '0.7em',
    },
    color: 'grey.600',
  },
};

const DisplayModeControl: FC = () => {
  const { displayMode, setDisplayMode } = useAppContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any, value: any) => {
    const val: DisplayMode = value ? 'interval' : 'note';
    setDisplayMode(val);
  };

  return (
    <FormControl>
      <Grid
        className="displayModeControl"
        sx={sx.root}
        component="label"
        container
        alignItems="center"
        spacing={1}
      >
        <Grid item sx={{ ...sx.switchLabel }}>
          {wording.form.diplayNotes}
        </Grid>
        <Grid item>
          <Switch
            color="primary"
            size="small"
            checked={displayMode === 'interval'}
            onChange={handleChange}
          />
        </Grid>
        <Grid item sx={{ ...sx.switchLabel, color: 'primary.main' }}>
          {wording.form.diplayIntervals}
        </Grid>
      </Grid>
    </FormControl>
  );
};

export default DisplayModeControl;
