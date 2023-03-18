/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useAppContext } from 'src/contexts/appContext';

const TuningControl: FC = () => {
  const { tunings, tuning, setTuning } = useAppContext();
  const [inputValue, setInputValue] = useState('');

  return (
    <Box>
      <Autocomplete
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
        renderInput={(params) => <TextField {...params} label="Tuning" />}
        fullWidth
      />
    </Box>
  );
};

export default TuningControl;
