import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { FC } from 'react';
import { Note, notes } from 'src/config/notes';
import { useAppContext } from 'src/contexts/appContext';

type Props = {
  size?: FormControlProps['size'];
  variant?: FormControlProps['variant'];
};

const TonicControl: FC<Props> = ({ size, variant }) => {
  const { tonic, setTonic } = useAppContext();

  const handleChange = (e: SelectChangeEvent) => {
    setTonic(e.target.value as Note);
  };

  const handleFocus = (e: React.FocusEvent<HTMLLIElement>) => {
    setTonic(e.target.dataset.value as Note);
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
        <MenuItem value="">None</MenuItem>
        {notes.map((note) => (
          <MenuItem key={note} value={note} onFocus={handleFocus}>
            {note}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TonicControl;
