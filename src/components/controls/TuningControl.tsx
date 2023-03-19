/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { FormControlProps } from '@mui/material/FormControl';
import { useAppContext } from 'src/contexts/appContext';

type Props = {
  size?: FormControlProps['size'];
  variant?: TextFieldProps['variant'];
};

const TuningControl: FC<Props> = ({ size, variant }) => {
  const { tunings, tuning, setTuning } = useAppContext();
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <Autocomplete
        size={size}
        value={tuning}
        onChange={(event: any, newValue: TuningType | null) => {
          if (newValue) setTuning(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        getOptionLabel={(option) => option.join(' - ').replace(/#/g, '♯')}
        isOptionEqualToValue={(option, value) => option.join() === value.join()}
        filterOptions={(options: TuningType[], state: any) =>
          options.filter((opt) => opt.join('').startsWith(state.inputValue))
        }
        id="tuning-control"
        options={tunings}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tuning"
            variant={variant}
            InputProps={{ ...params.InputProps, sx: { fontWeight: 900 } }}
          />
        )}
        fullWidth
      />
    </Box>
  );
};

export default TuningControl;
