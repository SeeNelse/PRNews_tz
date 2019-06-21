import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export const addressTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <Box>
    <TextField
      id="outlined-name"
      label="Address*"
      margin="normal"
      variant="outlined"
      {...input}
      {...custom}
    />
    {touched &&
    ((error && <span style={{color: 'red'}}>{error}</span>) ||
    (warning && <span style={{color: 'red'}}>{warning}</span>))}
  </Box>
);