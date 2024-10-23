/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { FC, HTMLAttributes, SyntheticEvent, useState } from 'react';

import Autocomplete, { AutocompleteRenderInputParams } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { FormControlProps } from '@mui/material/FormControl';
import { useAppContext } from 'src/contexts/appContext';
import sx from './controls.styles';

type Props = {
  size?: FormControlProps['size'];
  variant?: TextFieldProps['variant'];
};

const TuningControl: FC<Props> = ({ size, variant }) => {
  const { tunings, tuning, setTuning } = useAppContext();
  const [inputValue, setInputValue] = useState('');

  const filterOptions = (options: Tuning[], state: any) =>
    options.filter((opt) => {
      const notesWithoutOctave = opt.notes.map((n) => n.replace(/\d/g, ''));
      return (
        notesWithoutOctave.join('').startsWith(state.inputValue) ||
        opt.name.includes(state.inputValue)
      );
    });

  const handleChange = (event: any, newValue: Tuning | null) => {
    if (newValue) setTuning(newValue);
  };

  const handleInputChange = (event: SyntheticEvent, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: Tuning) => (
    <Box component="li" {...props} sx={sx.option}>
      <Box>{option.name}</Box>
      <Box sx={sx.tuning}>
        {option.notes.map((n) => (
          <Box sx={sx.note}>{n.replace(/#/g, '♯').replace(/\d/g, '')}</Box>
        ))}
      </Box>
    </Box>
  );

  const renderInput = (params: AutocompleteRenderInputParams) => (
    <TextField
      {...params}
      label="Tuning"
      variant={variant}
      InputProps={{ ...params.InputProps, sx: { fontWeight: 900 } }}
    />
  );

  return (
    <Box>
      <Autocomplete
        id="tuning-control"
        size={size}
        value={tuning}
        inputValue={inputValue}
        options={Object.values(tunings)}
        getOptionLabel={(option) => option.name}
        filterOptions={filterOptions}
        isOptionEqualToValue={(option, value) => option.notes.join() === value.notes.join()}
        renderOption={renderOption}
        renderInput={renderInput}
        onChange={handleChange}
        onInputChange={handleInputChange}
        fullWidth
      />
    </Box>
  );
};

export default TuningControl;
