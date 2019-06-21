import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
  spacing: {
    margin: '15px 10px 0px 10px',
    paddingBottom: '15px'
  },
  head: {
    margin: 0
  },
  padding: {
    padding: '5px !important',
    textAlign: 'left',
  },
  itemContainer: {
    margin: '0 15px 15px',
    position: 'relative'
  },
  img: {
    height: '100px', 
    width: '100px'
  },
  close: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
    margin: '0',
    minWidth: '0',
    padding: '3px',
  }
}));

export const CartItem = ({productInfo, deleteFromCart}) => {
  const classes = useStyles();
  return (
    <Card className={ classes.itemContainer }>
      <CardActions>
        <CardMedia
          image={ productInfo.img }
          title="Women's shoes"
          className={ classes.img }
        />
        <CardContent className={ classes.padding }>
          <CardContent className={ classes.padding }>
            <Typography gutterBottom variant="h5" component="h2" className={ classes.head }>
              { productInfo.name }
            </Typography>
          </CardContent>
          <CardContent className={ classes.padding }>
            <Typography variant="h6">{ productInfo.price }$</Typography>
          </CardContent>
        </CardContent>
        <Button className={ classes.close } onClick={ deleteFromCart }>
          <Close />
        </Button>
      </CardActions>
    </Card>
  )
}