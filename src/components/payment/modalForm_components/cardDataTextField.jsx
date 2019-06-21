import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export const cardDataTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <Box style={{ width: '20%' }}>
    <TextField
      id="outlined-name"
      label="Expiry date*"
      margin="normal"
      variant="outlined"
      {...input}
      {...custom}
    />
    {touched &&
    ((error && <span style={{color: 'red', marginBottom: '10px', display: 'block'}}>{error}</span>) ||
    (warning && <span style={{color: 'red', marginBottom: '10px', display: 'block'}}>{warning}</span>))}
  </Box>
);