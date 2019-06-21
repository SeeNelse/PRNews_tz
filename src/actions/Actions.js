import { Types } from './types/Types';

export const AddToCart = index => ({
  type: Types.ADD_TO_CART,
  payload: index
});

export const DeteleFromCart = index => ({
  type: Types.DELETE_FROM_CART,
  payload: index
});

export const OpenAccountModal = () => ({
  type: Types.OPEN_ACCOUNT_MODAL,
});

export const CloseAccountModal = () => ({
  type: Types.CLOSE_ACCOUNT_MODAL,
});

export const SendAccountData = (accountData, index) => ({
  type: Types.SEND_ACCOUNT_DATA,
  payload: {
    account: accountData,
    index: index
  }
});

export const EditAccount = index => ({
  type: Types.EDIT_ACCOUNT,
  payload: index
});

export const DeleteAccount = index => ({
  type: Types.DELETE_ACCOUNT,
  payload: index
});

export const SelectAccount = index => ({
  type: Types.SELECT_ACCOUNT,
  payload: index
});

export const ChangePaymentStep = () => ({
  type: Types.CHANGE_PAYMENT_STEP,
});

export const SelectPayment = type => ({
  type: Types.SELECT_PAYMENT,
  payload: type
});

export const OpanFinalModal = () => ({
  type: Types.OPEN_FINAL_MODAL,
});