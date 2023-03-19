import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { modes } from 'src/config/modes';
import { useAppContext } from 'src/contexts/appContext';

type Props = {
  size?: FormControlProps['size'];
  variant?: FormControlProps['variant'];
};

const ModeControl: FC<Props> = ({ size, variant }) => {
  const { mode, setMode } = useAppContext();

  const handleChange = (e: SelectChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <FormControl fullWidth size={size} variant={variant}>
      <InputLabel id="mode-control-label">Mode</InputLabel>
      <Select
        labelId="mode-control-label"
        label="Mode"
        id="mode-control"
        value={mode}
        onChange={handleChange}
        sx={{ textTransform: 'capitalize' }}
      >
        {modes.map((mode) => (
          <MenuItem
            key={mode}
            value={mode}
            sx={{ textTransform: 'capitalize' }}
          >
            {mode}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ModeControl;
