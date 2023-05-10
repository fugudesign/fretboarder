import { FormControlLabel, FormGroup, Switch } from '@mui/material';

import { DisplayMode } from 'src/config/displayModes';
import { FC } from 'react';
import { useAppContext } from 'src/contexts/appContext';
import wording from 'src/config/wording';

const DisplayModeControl: FC = () => {
  const { displayMode, setDisplayMode } = useAppContext();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any, value: any) => {
    const val: DisplayMode = value ? 'interval' : 'note';
    setDisplayMode(val);
  };

  return (
    <FormGroup>
      <FormControlLabel
        sx={{ margin: 0 }}
        control={
          <Switch
            color="primary"
            checked={displayMode === 'interval'}
            onChange={handleChange}
          />
        }
        label={wording.form.diplayIntervals}
      />
    </FormGroup>
  );
};

export default DisplayModeControl;
