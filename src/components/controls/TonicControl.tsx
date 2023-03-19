import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { notes } from 'src/config/tunings';
import { useAppContext } from 'src/contexts/appContext';

type Props = {
  size?: FormControlProps['size'];
  variant?: FormControlProps['variant'];
};

const TonicControl: FC<Props> = ({ size, variant }) => {
  const { tonic, setTonic } = useAppContext();

  const handleChange = (e: SelectChangeEvent) => {
    setTonic(e.target.value);
  };

  return (
    <FormControl fullWidth size={size} variant={variant}>
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
  );
};

export default TonicControl;
