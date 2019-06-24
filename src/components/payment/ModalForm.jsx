import React, {useState, useEffect} from 'react';
import { Field, reduxForm, Form, formValueSelector } from 'redux-form';
import { createNumberMask, createTextMask } from 'redux-form-input-masks';

import { nameTextField } from './modalForm_components/nameTextField';
import { addressTextField } from './modalForm_components/addressTextField';
import { cardNumberTextField } from './modalForm_components/cardNumberTextField';
import { cardDataTextField } from './modalForm_components/cardDataTextField';
import { cardCvvTextField } from './modalForm_components/cardCvvTextField';
import { paymentSelectField } from './modalForm_components/paymentSelectField';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';


const numberMask = createTextMask({
  pattern: '9999 9999 9999 9999',
});

const cvvMask = createTextMask({
  pattern: '999',
});

const dataMask = createTextMask({
  pattern: '99/99',
});

const validate = values => {
  const errors = {}
  if (!Number(values.username)) {
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length < 4) {
      errors.username = 'The field must have at least 4 characters';
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less';
    }
  } else {
    errors.username = 'Only characters allowed';
  }

  if (!values.address) {
    errors.address = 'Required';
  } else if (values.address.length < 5) {
    errors.address = 'The field must have at least 5 characters';
  } else if (values.address.length > 100) {
    errors.address = 'Must be 100 characters or less';
  }

  if (!values.cardNumber) {
    errors.cardNumber = 'Required';
  } else if (values.cardNumber.length < 16) {
    errors.cardNumber = 'Must be 16 characters';
  }

  if (!values.expiryDate) {
    errors.expiryDate = 'Required';
  } else if (values.expiryDate.length < 4) {
    errors.expiryDate = 'Must be 4 characters';
  }

  if (!values.CVVCode) {
    errors.CVVCode = 'Required';
  } else if (values.CVVCode.length < 3) {
    errors.CVVCode = 'Must be 3 characters';
  }

  if (!values.paymentMethod) {
    errors.paymentMethod = 'Required';
  }

  return errors;
}

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
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      '& div': {
        width: '100% !important',
        '&:first-child': {
          width: '100%',
        },
      }
    },
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15px'
  }
}));



let ModalForm = (props) => {
  const { handleSubmit, paymentTypes, editAccountNumber, accounts, SendAccountData, CloseAccountModal } = props
  const classes = styles();

  useEffect(() => {
    props.initialize(accounts[editAccountNumber]);
  }, []);

  return <Form onSubmit={handleSubmit(data => {
    if (typeof editAccountNumber == 'number') {
      SendAccountData(data, editAccountNumber);
    } else {
      SendAccountData(data);
    }
    CloseAccountModal();
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
        fullWidth
        component={ nameTextField }
      />
      <Field
        name="address"
        type="text"
        fullWidth
        component={ addressTextField }
      />
      <Field
        name="paymentMethod"
        fullWidth
        component={paymentSelectField}
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
      <Box className={ classes.cardWrapper }>
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
      </Box>
      <Box className={ classes.btnWrapper }>
        <Button onClick={ () => CloseAccountModal() }>Close</Button>
        <Button type="submit" variant="contained" color="primary">Save</Button>
      </Box>
    </React.Fragment>
  }</Form>
}

ModalForm = reduxForm({
  form: 'modal',
  validate,
})(ModalForm)


export default ModalForm