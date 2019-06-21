import React, {useEffect} from 'react';

import { Profile } from './Profile';
import ModalForm from './ModalForm';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';


const useStyles = makeStyles(theme => ({
  modalStyle: {
    top: '50%',
    left: '50%',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
    background: '#fff',
    padding: '25px',
  },
  accountList: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));

export const CustomerAccount = ({ 
  profileModalState,
  paymentTypes,
  selectedPaymentType,
  accounts,
  editAccountNumber,
  currentAccount,
  OpenAccountModal,
  CloseAccountModal,
  SendAccountData,
  EditAccount,
  DeleteAccount,
  SelectAccount,
  ChangePaymentStep,
  SelectPayment,
 }) => {
  const classes = useStyles();
  useEffect(() => {
    SelectPayment();
  }, []);
  return (
    <React.Fragment>
      <RadioGroup name="payment-account" className={ classes.accountList }>
        {
          accounts.map((el, index) => {
            return <Profile 
                      key={ index } 
                      index={ index } 
                      profileItem={ el }
                      currentAccount={ currentAccount }
                      EditAccount={ EditAccount } 
                      DeleteAccount={ DeleteAccount } 
                      SelectAccount={ SelectAccount }
                    /> 
          })
        }
      </RadioGroup>
      <Box display="flex" justifyContent="space-between" alignItems="center"> 
        <Fab color="primary" aria-label="Add" onClick={ () => OpenAccountModal() } >
          <AddIcon/>
        </Fab>
        <Button variant="contained" color="primary" disabled={ currentAccount === null } onClick={ () => ChangePaymentStep() }>CONTINUE TO PAYMENT</Button>
      </Box>
      <Modal
        aria-labelledby="Profile modal"
        aria-describedby="Profile modal description"
        open={ profileModalState }
        onClose={ () => CloseAccountModal() }
      >
        <Box className={ classes.modalStyle }>
            <ModalForm
              paymentTypes={ paymentTypes }
              selectedPaymentType={ selectedPaymentType }
              editAccountNumber={ editAccountNumber }
              accounts={ accounts }
              SendAccountData={ SendAccountData }
              CloseAccountModal={ CloseAccountModal } 
            />
        </Box>
      </Modal>
    </React.Fragment>
  );
}