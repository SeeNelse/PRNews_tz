import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Redirect, Link } from "react-router-dom";

import * as actionCreators from '../actions/Actions';
import ModalForm from '../components/payment/ModalForm';
import {Profile} from '../components/payment/Profile';

//materialUI
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
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
  accountList: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '15px'
  },
  popupStyle: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    background: '#fff',
    padding: '25px',
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
    modalState: state.app.modalState,
    paymentTypes: state.app.paymentTypes,
    selectedPaymentType: state.app.selectedPaymentType,
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    OpenAccountModal: actionCreators.OpenAccountModal,
    CloseAccountModal: actionCreators.CloseAccountModal,
    SendAccountData: actionCreators.SendAccountData,
  }, dispatch)
}


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, OpenAccountModal, CloseAccountModal, modalState, paymentTypes, selectedPaymentType, SendAccountData } = this.props;
    return (
      // <div>
      //   {cart.length ?
          <Paper className={ classes.wrapper }>
            <Typography variant="subtitle1">
              <Link to='/' className={ classes.backLink }><KeyboardBackspace/> Back to shop</Link>
            </Typography>
            <ul className={ classes.progress }>
              <li className={ classes.progress_item_active }>01 CUSTOMER ACCOUNT</li>
              <li className={ classes.progress_item }>02 PAYMENT SELECTION</li>
            </ul>
            <Typography variant="h4">Customer Account</Typography>
            <div className={ classes.accountList }>
              <Profile OpenAccountModal={ OpenAccountModal } />
            </div>
            <Fab color="primary" aria-label="Add" onClick={ () => OpenAccountModal() }>
              <AddIcon/>
            </Fab>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={modalState}
              onClose={() => CloseAccountModal()}
            >
              <div className={ classes.popupStyle }>
                <ModalForm 
                  CloseAccountModal={ CloseAccountModal } 
                  paymentTypes={ paymentTypes }
                  selectedPaymentType={ selectedPaymentType }
                  SendAccountData={ SendAccountData }
                />
              </div>
            </Modal>
          </Paper>
        //   :
        // <Redirect to='/' />}
      // </div>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PaymentContainer))