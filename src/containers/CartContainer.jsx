import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/Actions';
import { bindActionCreators, compose } from 'redux';
import { Link } from 'react-router-dom'
import PaymentContainer from '../containers/PaymentContainer';

import { CartItem } from '../components/CartItem';

import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const mapStateToProps = function(state){
  return {
    cart: state.app.cart,
    totalPrice: state.app.totalPrice,
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
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 15px 20px',
    fontSize: '21px', 
  },
  link: {
    textDecoration: 'none'
  }
};



class CartContainer extends Component {
  render() {
    const { cart, classes, DeteleFromCart, totalPrice } = this.props;
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
            <Typography variant="body1" className={ classes.total }>Total: <span>{ totalPrice }$</span></Typography>
            <Link className={ classes.link } to='/payment'>
              <Button variant="contained" size="medium" color="primary">Proceed to payment</Button>
            </Link>
          </div> :
          <Typography variant="h6">Cart is empty</Typography>
        }
      </Paper>
    )
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CartContainer))