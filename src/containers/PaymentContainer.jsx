import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Redirect } from "react-router-dom";

import * as actionCreators from '../actions/Actions';
import ModalForm from '../components/ModalForm';

//materialUI
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';


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
    padding: '15px'
  },
  popupStyle: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    background: '#fff',
    padding: '15px',
  },
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
    SelectPaymentType: actionCreators.SelectPaymentType,
  }, dispatch)
}


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, OpenAccountModal, CloseAccountModal, modalState, paymentTypes, SelectPaymentType, selectedPaymentType } = this.props;
    return (
      // <div>
      //   {cart.length ?
          <Paper className={ classes.wrapper }>
            <ul className={ classes.progress }>
              <li className={ classes.progress_item_active }>01 CUSTOMER ACCOUNT</li>
              <li className={ classes.progress_item }>02 PAYMENT SELECTION</li>
            </ul>
            <Typography variant="h4">Customer Account</Typography>
            <div className={ classes.accountList }>
              <Fab color="primary" aria-label="Add" onClick={ () => OpenAccountModal() }>
                <AddIcon/>
              </Fab>
            </div>
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
                  SelectPaymentType={ SelectPaymentType }
                  selectedPaymentType={ selectedPaymentType }
                />
              </div>
            </Modal>
          </Paper>
        //   :
        // <Redirect to='/payment' />}
      // </div>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PaymentContainer))