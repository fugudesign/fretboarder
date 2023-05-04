import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useAppContext } from 'src/contexts/appContext';
import wording from 'src/config/wording';

type Props = {
  size?: FormControlProps['size'];
  variant?: FormControlProps['variant'];
};

const DisplayModeControl: FC<Props> = ({ size, variant }) => {
  const { displayModes, displayMode, setDisplayMode } = useAppContext();

  const handleChange = (e: SelectChangeEvent) => {
    setDisplayMode(e.target.value as DisplayMode);
  };

  return (
    <FormControl fullWidth size={size} variant={variant}>
      <InputLabel id="display-mode-control-label">Display mode</InputLabel>
      <Select
        labelId="display-mode-control-label"
        label="Display mode"
        id="display-mode-control"
        value={displayMode}
        onChange={handleChange}
      >
        {displayModes.map((display) => (
          <MenuItem key={display} value={display}>
            {wording.displayMode[display]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DisplayModeControl;
