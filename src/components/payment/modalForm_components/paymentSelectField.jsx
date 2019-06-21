import React from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export const paymentSelectField = ({ input, label, meta: { touched, error, warning }, children, ...custom}) => (
  <Box>
    <TextField
      id="outlined-select-currency"
      select
      label="Payment method*"
      margin="normal"
      variant="outlined"
      children={children}
      {...custom}
      {...input}
    />
    {touched &&
    ((error && <span style={{color: 'red'}}>{error}</span>) ||
    (warning && <span style={{color: 'red'}}>{warning}</span>))}
  </Box>
);