import { Types } from "./actions/types/Types";

const defaultState = {
  testValue: false,
  testValue2: '',
  goodsList: [
    {
      id: '1',
      name: 'Shoes 1',
      price: 400,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/1.png",
    },
    {
      id: '2',
      name: 'Shoes 2',
      price: 350,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/2.png",
    },
    {
      id: '3',
      name: 'Shoes 3',
      price: 600,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/3.png",
    },
    {
      id: '4',
      name: 'Shoes 4',
      price: 440,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/4.png",
    },
    {
      id: '5',
      name: 'Shoes 5',
      price: 410,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus leo nec urna interdum consectetur. Vivamus nisi ipsum, tempor et nibh ac, laoreet posuere mi.',
      img: "./img/5.jpg",
    },
  ],
  cart: [],
  totalPrice: 0,
  modalState: false,
  paymentTypes: ['PayPal', 'Credit Card', 'Belance'],
  selectedPaymentType: '',
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) { 

    case Types.GOODS_LIST: {
      return { 
        ...state,
      }
    }

    case Types.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, state.goodsList[action.payload]],
        totalPrice: state.totalPrice + state.goodsList[action.payload].price
      }
    }

    case Types.DELETE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload),
        totalPrice: state.totalPrice - state.cart[action.payload].price
      }
    }

    case Types.OPEN_ACCOUNT_MODAL: {
      return {
        ...state,
        modalState: true,
      }
    }
    case Types.CLOSE_ACCOUNT_MODAL: {
      return {
        ...state,
        modalState: false,
      }
    }

    case Types.SELECT_PAYMENT_TYPE: {
      return {
        ...state,
        selectedPaymentType: action.payload
      }
    }

    default:
      return state;
  }
};

export default appReducer;