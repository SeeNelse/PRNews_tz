import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export const cardNumberTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <Box style={{ width: '55%' }}>
    <TextField
      id="outlined-name"
      label="Card number*"
      margin="normal"
      variant="outlined"
      style={{ width: '100%' }}
      {...input}
      {...custom}
    />
    {touched &&
    ((error && <span style={{color: 'red', marginBottom: '10px', display: 'block'}}>{error}</span>) ||
    (warning && <span style={{color: 'red', marginBottom: '10px', display: 'block'}}>{warning}</span>))}
  </Box>
);