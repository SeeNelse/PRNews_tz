import React, {useEffect} from 'react';

import { CompleteOrder } from './CompleteOrder';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';


const useStyles = makeStyles(theme => ({
  label: {
    margin: '0 0 25px'
  },
  labelWrapper: {
    padding: '15px 0'
  },
  backLink: {
    color: '#000000',
    textDecoration: 'none',
    cursor: 'pointer',
    '& svg': {
      marginBottom: '-6px',
      marginLeft: '-3px'
    },
    '&:hover': {
      borderBottom: '1px solid #000000'
    }
  },
  modalStyle: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    background: '#fff',
    padding: '25px',
  },
}));

export const PaymentSelection = ({ account, cart, prices, finalModalState, ChangePaymentStep, SelectPayment, OpanFinalModal }) => {
  const classes = useStyles();
  useEffect((account, paymentMethod) => {
    SelectPayment(account.paymentMethod);
  }, []);
  const [value, setValue] = React.useState(account.paymentMethod);
  function handleChange(event) {
    setValue(event.target.value);
    SelectPayment(event.target.value);
  }
  return (
    <React.Fragment>
      <RadioGroup aria-label="payment-type" name="payment-type" value={ value } onChange={ handleChange } className={ classes.labelWrapper }>
        <FormControlLabel className={ classes.label } value="PayPal" control={<Radio color="primary"/>} label={
          <img src="img/payment/paypal.png" alt="paypal"/>
        } />
        <FormControlLabel className={ classes.label } value="Credit Card" control={<Radio color="primary"/>} label={
          <img src="img/payment/card.png" alt="card"/>
        } />
        <FormControlLabel className={ classes.label } value="Balance" control={<Radio color="primary"/>} label={
          <img src="img/payment/balance.png" alt="balance"/>
        } />
      </RadioGroup>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <a onClick={ () => ChangePaymentStep() } className={ classes.backLink }><KeyboardBackspace/> Return to Customer Account</a>
        <Button variant="contained" color="primary" onClick={ () => OpanFinalModal() }>COMPLETE ORDER</Button>
      </Box>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={finalModalState}
      >
        <Box className={ classes.modalStyle }>
          <CompleteOrder 
            cart={ cart }
            prices={ prices }
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}