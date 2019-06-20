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

export const SendAccountData = accountData => ({
  type: Types.SEND_ACCOUNT_DATA,
  payload: accountData
});