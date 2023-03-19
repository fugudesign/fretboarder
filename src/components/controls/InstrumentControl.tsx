import FormControl, {
  FormControlProps,
  FormControlPropsSizeOverrides,
} from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { neckTypes } from 'src/config/necks';
import { useAppContext } from 'src/contexts/appContext';
import wording from 'src/config/wording';

type Props = {
  size?: FormControlProps['size'];
  variant?: FormControlProps['variant'];
};

const InstrumentControl: FC<Props> = ({ size, variant }) => {
  const { type, setType } = useAppContext();

  const handleChange = (event: SelectChangeEvent<NeckType>) => {
    setType(event.target.value as NeckType);
  };

  return (
    <FormControl fullWidth size={size} variant={variant}>
      <InputLabel id="instrument-control-label">Instrument</InputLabel>
      <Select
        labelId="instrument-control-label"
        label="Instrument"
        id="instrument-control"
        value={type}
        onChange={handleChange}
        sx={{ textTransform: 'capitalize', fontWeight: 900 }}
      >
        {neckTypes.map((neck) => (
          <MenuItem
            key={neck}
            value={neck}
            sx={{ textTransform: 'capitalize' }}
          >
            {wording.instrument[neck]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default InstrumentControl;
