import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { blueGrey } from '@mui/material/colors';


import { useFormControl } from '@mui/material/FormControl';


export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 500, background: "#40485A", borderRadius: "7px" }}

    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <SearchIcon sx={{ color: blueGrey.A200 }}/>
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Поиск объявлений"
        inputProps={{ 'aria-label': 'Поиск объявлений' }}
      />

    </Paper>
  );
}
