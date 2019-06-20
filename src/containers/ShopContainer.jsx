import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/Actions';
import { bindActionCreators, compose } from 'redux';

import { GoodsCard } from '../components/shop/GoodsCard';
//materialUI
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = makeStyles(theme => ({
  test: {
    background: '#e0e',
  },
}));

const mapStateToProps = function(state){
  return {
    goodsList: state.app.goodsList,
    cart: state.app.cart,
  }
}
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    AddToCart: actionCreators.AddToCart,
  }, dispatch)
}

class ShopContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { goodsList, cart, AddToCart } = this.props;
    return (
      <Grid container spacing={3}>
        {
          goodsList.map((good, index) => {
            return <GoodsCard key={ index } productInfo={ good } cart={ cart } addToCart={ () => AddToCart(index) }/>
          })
        }
      </Grid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainer)