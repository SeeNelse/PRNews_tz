import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/Actions';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Link, withRouter } from 'react-router-dom'

import { CartItem } from '../components/cart/CartItem';
import { Price } from '../components/cart/Price';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import {  withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const mapStateToProps = function(state){
  return {
    cart: state.app.cart,
    prices: state.app.prices,
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    DeteleFromCart: actionCreators.DeteleFromCart,
  }, dispatch)
}

const styles = {
  cartWrapper: {
    padding: '15px 0 20px',
  },
  head: {
    marginBottom: 10,
  },
  link: {
    textDecoration: 'none'
  },
  btnToPay: {
    marginTop: '15px'
  }
};


class CartContainer extends Component {
  render() {
    const { cart, classes, DeteleFromCart, prices } = this.props;
    return (
      <Paper className={ classes.cartWrapper }>
        <Badge badgeContent={ cart.length } className={ classes.head } color="primary">
          <Typography variant="h5">Shopping Cart</Typography>
        </Badge>
        {
          cart.map((productInfo, index) => {
            return <CartItem key={ index } productInfo={ productInfo } deleteFromCart={ () => DeteleFromCart(index) }/>
          })
        }
        { cart.length ? 
          <div>
            <Price prices={ prices } />
            {
              this.props.location.pathname === '/' ?
              <div className={ classes.btnToPay }>
                <Link className={ classes.link } to='/payment'>
                  <Button variant="contained" size="medium" color="primary">Proceed to payment</Button>
                </Link>
              </div> :
              false
            }
            
          </div> :
          <Typography variant="h6">Cart is empty</Typography>
        }
      </Paper>
    )
  }
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CartContainer)))