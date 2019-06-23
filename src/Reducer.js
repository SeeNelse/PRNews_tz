import { Types } from "./actions/types/Types";


const defaultState = {
  goodsList: [
    {
      id: '1',
      name: 'Shoes 1',
      price: 400,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/goods/1.png",
    },
    {
      id: '2',
      name: 'Shoes 2',
      price: 350,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/goods/2.png",
    },
    {
      id: '3',
      name: 'Shoes 3',
      price: 600,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/goods/3.png",
    },
    {
      id: '4',
      name: 'Shoes 4',
      price: 440,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/goods/4.png",
    },
    {
      id: '5',
      name: 'Shoes 5',
      price: 410,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/goods/5.jpg",
    },
  ],
  cart: [],
  prices: {
    subTotalPrice: 0,
    percent: 0,
    vat: 0,
    total: 0,
  },
  profileModalState: false,
  finalModalState: false,
  paymentTypes: ['PayPal', 'Credit Card', 'Balance'],
  paymentStep: 1,
  accounts: [],
  currentAccount: null,
  editAccountNumber: null,
  paymentType: '',
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) { 

    case Types.GOODS_LIST: {
      return { 
        ...state,
      }
    }

    case Types.ADD_TO_CART: {
      let subTotal = state.prices.subTotalPrice + state.goodsList[action.payload].price;
      let percent = subTotal / 100;
      let vat = subTotal * 21 / 100;
      let total = subTotal + percent + vat;
      let totalResult = String(total).match(/\./) ? parseFloat(total).toFixed(2) : total;
      return {
        ...state,
        cart: [...state.cart, state.goodsList[action.payload]],
        prices: {
          subTotalPrice: subTotal,
          percent: percent,
          vat: vat,
          total: totalResult
        },
      }
    }

    case Types.DELETE_FROM_CART: {
      let subTotal = state.prices.subTotalPrice - state.cart[action.payload].price;
      let percent = subTotal / 100;
      let vat = subTotal * 21 / 100;
      let total = subTotal + percent + vat;
      let totalResult = String(total).match(/\./) ? parseFloat(total).toFixed(2) : total;
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
        prices: {
          subTotalPrice: subTotal,
          percent: percent,
          vat: vat,
          total: totalResult
        }
        
      }
    }

    case Types.OPEN_ACCOUNT_MODAL: {
      return {
        ...state,
        profileModalState: true,
      }
    }
    case Types.CLOSE_ACCOUNT_MODAL: {
      return {
        ...state,
        profileModalState: false,
        editAccountNumber: false,
      }
    }

    case Types.SEND_ACCOUNT_DATA: {
      if (typeof action.payload.index === 'number') {
        let accountsTemp = state.accounts;
        accountsTemp[action.payload.index] = action.payload.account;
        return {
          ...state,
          editAccountNumber: null,
          accounts: accountsTemp,
        }
      } else {
        return {
          ...state,
          accounts: [...state.accounts, action.payload.account],
        }
      }
    }

    case Types.EDIT_ACCOUNT: {
      return {
        ...state,
        profileModalState: true,
        editAccountNumber: action.payload
      }
    }

    case Types.DELETE_ACCOUNT: {
      return {
        ...state,
        accounts: state.accounts.filter((item, index) => index !== action.payload),
      }
    }

    case Types.SELECT_ACCOUNT: {
      return {
        ...state,
        currentAccount: action.payload
      }
    }

    case Types.CHANGE_PAYMENT_STEP: {
      return {
        ...state,
        paymentStep: state.paymentStep === 1 ? 2 : 1
      }
    }

    case Types.SELECT_PAYMENT: {
      let vat;
      let percent;
      let subTotal = state.prices.subTotalPrice;
      if (action.payload === 'PayPal') {
        percent = subTotal / 100;
        vat = subTotal * 21 / 100;
      } else if (action.payload === 'Credit Card') {
        percent = subTotal / 100;
        vat = 0;
      } else if (action.payload === 'Balance') {
        percent = 0;
        vat = 0;
      } else {
        percent = subTotal / 100;
        vat = subTotal * 21 / 100;
      }
      let total = subTotal + percent + vat;
      let totalResult = String(total).match(/\./) ? parseFloat(total).toFixed(2) : total;
      return {
        ...state,
        prices: {
          subTotalPrice: subTotal,
          percent: percent,
          vat: vat,
          total: totalResult
        },
      }
    }

    case Types.OPEN_FINAL_MODAL: {
      return {
        ...state,
        finalModalState: true
      }
    }

    default:
      return state;
  }
};

export default appReducer;