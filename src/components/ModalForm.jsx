import React from 'react';
import { Field, reduxForm, propTypes, Form } from 'redux-form';
import { createNumberMask, createTextMask } from 'redux-form-input-masks';

import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';

const nameTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div>
    <TextField
      id="outlined-name"
      label="Name*"
      margin="normal"
      variant="outlined"
      {...input}
      {...custom}
    />
    {touched &&
    ((error && <span style={{color: 'red'}}>{error}</span>) ||
    (warning && <span style={{color: 'red'}}>{warning}</span>))}
  </div>
);

const addressTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div>
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
  </div>
);

const cardNumberTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div style={{ width: '55%' }}>
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
  </div>
);

const cardDataTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div style={{ width: '20%' }}>
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
  </div>
);

const cardCvvTextField = ({ input, label, meta: { touched, error, warning }, ...custom }) => (
  <div style={{ width: '20%' }}>
    <TextField
      id="outlined-name"
      label="CVV code*"
      margin="normal"
      variant="outlined"
      {...input}
      {...custom}
    />
    {touched &&
    ((error && <span style={{color: 'red', marginBottom: '10px', display: 'block'}}>{error}</span>) ||
    (warning && <span style={{color: 'red', marginBottom: '10px', display: 'block'}}>{warning}</span>))}
  </div>
);

const paymentSlectField = ({ input, label, meta: { touched, error, warning }, children, ...custom}) => (
  <div>
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
  </div>
)

const numberMask = createTextMask({
  pattern: '9999 9999 9999 9999',
});

const cvvMask = createTextMask({
  pattern: '999',
});

const dataMask = createTextMask({
  pattern: '99/99',
});

const styles = makeStyles(theme => ({
  close: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
    margin: '0',
    minWidth: '0',
    padding: '3px',
  },
  textField: {
    width: '100%'
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}));

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 4) {
    errors.username = 'The field must have at least 4 characters'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }

  if (!values.address) {
    errors.address = 'Required'
  } else if (values.address.length < 5) {
    errors.address = 'The field must have at least 5 characters'
  } else if (values.address.length > 100) {
    errors.address = 'Must be 100 characters or less'
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Required'
  } else if (values.cardNumber.length < 16) {
    errors.cardNumber = 'Must be 16 characters'
  }

  if (!values.expiryDate) {
    errors.expiryDate = 'Required'
  } else if (values.expiryDate.length < 4) {
    errors.expiryDate = 'Must be 4 characters'
  }

  if (!values.CVVCode) {
    errors.CVVCode = 'Required'
  } else if (values.CVVCode.length < 3) {
    errors.CVVCode = 'Must be 3 characters'
  }

  if (!values.paymentMethod) {
    errors.paymentMethod = 'Required'
  }

  return errors;
}



let ModalForm = (props) => {
  const { CloseAccountModal, handleSubmit, paymentTypes, SelectPaymentType, selectedPaymentType, pristine } = props
  const classes = styles();
  return <Form onSubmit={handleSubmit(data => {
    console.log(data);
  })}>{
    <React.Fragment>
      <Button className={ classes.close } onClick={ () => CloseAccountModal() }>
        <Close />
      </Button>
      <Typography variant="h4" id="modal-title">
      Add Customer Account
      </Typography>
      <Typography variant="subtitle1" id="simple-modal-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
      <Field
        name="username"
        type="text"
        className={ classes.textField }
        component={ nameTextField }
      />
      <Field
        name="address"
        type="text"
        className={ classes.textField }
        component={ addressTextField }
      />
      <Field
        name="paymentMethod"
        component={paymentSlectField}
        className={ classes.textField }
      >
        {
          paymentTypes.map((el, index) => {
            return <MenuItem key={ index } value={ el }>{ el }</MenuItem>
          })
        }
      </Field>
      <Typography variant="subtitle1" id="simple-modal-description">
        Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.
      </Typography>
      <div className={ classes.cardWrapper }>
        <Field
          name="cardNumber"
          type="text"
          component={ cardNumberTextField }
          {...numberMask}
        />
        <Field
          name="expiryDate"
          type="text"
          component={ cardDataTextField }
          {...dataMask}
        />
        <Field
          name="CVVCode"
          type="text"
          component={ cardCvvTextField }
          {...cvvMask}
        />
      </div>
      <Button onClick={ () => CloseAccountModal() }>Close</Button>
      <Button type="submit" variant="contained" color="primary" disabled={pristine} >Save</Button>
    </React.Fragment>
  }</Form>
}

ModalForm = reduxForm({
  form: 'modal',
  validate,
})(ModalForm)

export default ModalForm