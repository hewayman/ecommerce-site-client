import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { useState } from 'react';

type FiltersProps = {
  handleSort: (value: string) => void;
};

const Filters = ({ handleSort }: FiltersProps) => {
  const [value, setValue] = useState<string>('');

  const onChange = (e: SelectChangeEvent) => {
    setValue(e.target.value);
    handleSort(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Sort</InputLabel>
      <Select
        labelId="sort-items-label"
        value={value}
        label="Sort"
        onChange={onChange}
      >
        <MenuItem value="">Most Relevant</MenuItem>
        <MenuItem value="lowest">Price, low to high</MenuItem>
        <MenuItem value="highest">Price, high to low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filters;
