import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles(theme => ({
  padding: {
    padding: '15px 10px',
  },
  media: {
    height: 220
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '8px 20px 15px',
  }
}));

export const GoodsCard = ({productInfo, cart, addToCart, index}) => {
  const classes = styles();
  return(
    <Grid item md={4} sm={6} xs={12}>
      <Card className={ classes.card }>
        <CardMedia
          className={ classes.media }
          image={ productInfo.img }
          title="Women's shoes"
          style={{ height: '220px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { productInfo.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { productInfo.desc }
          </Typography>
        </CardContent>
        <CardActions className={ classes.price }>
          <Typography variant="h6">{ productInfo.price }$</Typography>
          <Button color="primary" variant="contained" onClick={ addToCart }>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}