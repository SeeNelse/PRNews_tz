import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  head: {
    marginBottom: '20px'
  },
  listItem: {
    padding: '0 16px'
  },
  backToHomeBtn: {
    margin: '20px auto 0',
    display: 'block',
  },
  backToHomeLink: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

export const CompleteOrder = ({ cart, prices }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" className={ classes.head }>
        Congratulations!
      </Typography>
      <Typography variant="h6">
        Your purchases:
      </Typography>
      <Box>
        <List>
          {
            cart.map((el, index) => {
              return  <ListItem className={ classes.listItem }  key={ index } ><ListItemText primary={ el.name }/></ListItem>
            })
          }
        </List>
      </Box>
      <Typography variant="h6">
        Total price: {prices.total}
      </Typography>
      <Button variant="contained" color="primary" className={ classes.backToHomeBtn }><a href='/' className={ classes.backToHomeLink }>Back to home</a></Button>
    </React.Fragment>
  );
}