import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from "react-router-dom";

import * as actionCreators from '../actions/Actions';
import { CustomerAccount } from '../components/payment/CustomerAccount';
import { PaymentSelection } from '../components/payment/PaymentSelection';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';


const styles = {
  wrapper: {
    padding: '15px'
  },
  progress: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0',
    listStyle: 'none',
  },
  progress_item: {
    fontSize: '18px',
    padding: '0 20px 10px',
    borderBottom: '1px solid #9e9e9e',
    color: '#9e9e9e'
  },
  progress_item_active: {
    fontSize: '18px',
    padding: '0 20px 10px',
    borderBottom: '1px solid #000',
    color: '#000000'
  },
  backLink: {
    color: '#000000',
    textDecoration: 'none',
    '& svg': {
      marginBottom: '-6px',
      marginLeft: '-3px'
    },
    '&:hover': {
      borderBottom: '1px solid #000000'
    }
  }
};

const mapStateToProps = function(state){
  return {
    cart: state.app.cart,
    profileModalState: state.app.profileModalState,
    paymentTypes: state.app.paymentTypes,
    selectedPaymentType: state.app.selectedPaymentType,
    accounts: state.app.accounts,
    editAccountNumber: state.app.editAccountNumber,
    paymentStep: state.app.paymentStep,
    currentAccount: state.app.currentAccount,
    finalModalState: state.app.finalModalState,
    prices: state.app.prices
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    OpenAccountModal: actionCreators.OpenAccountModal,
    CloseAccountModal: actionCreators.CloseAccountModal,
    SendAccountData: actionCreators.SendAccountData,
    EditAccount: actionCreators.EditAccount,
    DeleteAccount: actionCreators.DeleteAccount,
    SelectAccount: actionCreators.SelectAccount,
    ChangePaymentStep: actionCreators.ChangePaymentStep,
    SelectPayment: actionCreators.SelectPayment,
    OpanFinalModal: actionCreators.OpanFinalModal,
  }, dispatch)
}


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { 
      classes,
      cart,
      profileModalState,
      paymentTypes,
      paymentStep,
      selectedPaymentType,
      accounts,
      editAccountNumber,
      currentAccount,
      finalModalState,
      prices,
      OpenAccountModal,
      CloseAccountModal,
      SendAccountData,
      EditAccount,
      DeleteAccount,
      SelectAccount,
      ChangePaymentStep,
      SelectPayment,
      OpanFinalModal,
    } = this.props;

    return (
      <React.Fragment>
        {cart.length ?
          <Paper className={ classes.wrapper }>

            <Typography variant="subtitle1">
            <Link to='/' className={ classes.backLink }><KeyboardBackspace/> Back to shop</Link>
            </Typography>
            <ul className={ classes.progress }>
              <li className={ paymentStep === 1 ? classes.progress_item_active : classes.progress_item }>01 CUSTOMER ACCOUNT</li>
              <li className={ paymentStep === 2 ? classes.progress_item_active : classes.progress_item }>02 PAYMENT SELECTION</li>
            </ul>
            {
            paymentStep === 1 ?
              <Box>
                <Typography variant="h4">Customer Account</Typography>
                <CustomerAccount  
                  profileModalState={ profileModalState }
                  paymentTypes={ paymentTypes }
                  selectedPaymentType={ selectedPaymentType }
                  accounts={ accounts }
                  editAccountNumber={ editAccountNumber }
                  OpenAccountModal={ OpenAccountModal }
                  CloseAccountModal={ CloseAccountModal }
                  SendAccountData={ SendAccountData }
                  EditAccount={ EditAccount }
                  DeleteAccount={ DeleteAccount }
                  SelectAccount={ SelectAccount }
                  SelectPayment={ SelectPayment }
                  ChangePaymentStep={ ChangePaymentStep }
                  currentAccount={ currentAccount }
                />
              </Box> :
              <PaymentSelection 
                cart={ cart }
                prices={ prices }
                account={ accounts[currentAccount] } 
                finalModalState={ finalModalState }
                ChangePaymentStep={ ChangePaymentStep } 
                SelectPayment={ SelectPayment }  
                OpanFinalModal={ OpanFinalModal }         
              />
            }
          </Paper>
        : <Redirect to='/' />}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PaymentContainer))