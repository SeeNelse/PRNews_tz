import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  prices: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '0 15px',
    fontSize: '16px',
    marginBottom: '5px',
    '&:last-child': {
      marginBottom: '0'
    },
  },
  pricesContainer: {
    padding: '10px 0',
    borderBottom: '1px solid #d2d2d2',
    borderTop: '1px solid #d2d2d2',
    margin: '20px 15px',
  }
}));

export const Price = ({ prices }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={ classes.pricesContainer }>
        <Typography variant="body1" className={ classes.prices }>Subtotal: <span>{ prices.subTotalPrice }$</span></Typography>
        { prices.percent ? <Typography variant="body1" className={ classes.prices }>Payment processing services 1%: <span>{ prices.percent }$</span></Typography> : ''}
        { prices.vat ? <Typography variant="body1" className={ classes.prices }>VAT 21%: <span>{ prices.vat }$</span></Typography> : ''}
      </div>
      <Typography variant="h5">Total: <span>{ prices.total }$</span></Typography>
    </React.Fragment>
  )
}