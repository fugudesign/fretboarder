import Select, { SelectChangeEvent } from '@mui/material/Select';

import Box from '@mui/material/Box';
import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { notes } from 'src/config/tunings';
import { useAppContext } from 'src/contexts/appContext';

const TonicControl: FC = () => {
  const { tonic, setTonic } = useAppContext();

  const handleChange = (e: SelectChangeEvent) => {
    setTonic(e.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel id="tonic-control-label">Tonic</InputLabel>
        <Select
          labelId="tonic-control-label"
          label="Tonic"
          id="tonic-control"
          value={tonic}
          onChange={handleChange}
        >
          {notes.map((note) => (
            <MenuItem key={note} value={note}>
              {note}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TonicControl;
