import Select, { SelectChangeEvent } from '@mui/material/Select';

import Box from '@mui/material/Box';
import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { modes } from 'src/config/modes';
import { useAppContext } from 'src/contexts/appContext';

const ModeControl: FC = () => {
  const { mode, setMode } = useAppContext();

  const handleChange = (e: SelectChangeEvent) => {
    setMode(e.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="mode-control-label">Mode</InputLabel>
        <Select
          labelId="mode-control-label"
          label="Mode"
          id="mode-control"
          value={mode}
          onChange={handleChange}
        >
          {modes.map((mode) => (
            <MenuItem key={mode} value={mode}>
              {mode}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ModeControl;
