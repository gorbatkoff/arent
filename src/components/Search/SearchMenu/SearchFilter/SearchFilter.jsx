import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchFilter({label}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={marks}
      sx={{ width: "auto", background: "#E8EDF5", border: "0"}}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}

const marks = [
  { label: 'Changan'},
  { label: 'Chery'},
  { label: 'Chevrolet'},
  { label: 'Citroen'},
  { label: 'Daewoo'},
  { label: 'Haval'},
  { label: 'Honda'},
];
