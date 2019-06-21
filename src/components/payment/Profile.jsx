import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
    marginBottom: '30px'
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardRadio: {
    margin: 0
  }
}));


export const Profile = ({ profileItem, index, currentAccount, EditAccount, DeleteAccount, SelectAccount }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  
  function encryptionCard() {
    let card = profileItem.cardNumber;
    let encCode = '';
    for (let i = 0; i < card.length; i++) {
      if (i < 4) {
        encCode += card[i];
      } else if (i > 11) {
        encCode += card[i];
      } else {
        encCode += '*';
      }
    }
    return encCode;
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            { profileItem.username[0] }
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={ profileItem.username }
        subheader={ profileItem.address }
      />
      <CardContent className={ classes.cardInfo }>
        <Box>
          <Typography variant="body2" color="textSecondary" component="p">
            Card: { encryptionCard() }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Payment: { profileItem.paymentMethod }
          </Typography>
        </Box>
        <FormControlLabel className={ classes.cardRadio } 
                          value={ profileItem.username+index } 
                          control={<Radio onChange={ () => SelectAccount(index) } 
                          checked={ currentAccount === index}
                          color="primary" />}
        />
      </CardContent>
      <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
        onClick={ handleClose }
      >
        <MenuItem onClick={ () => EditAccount(index) }>Edit</MenuItem>
        <MenuItem onClick={ () => DeleteAccount(index) }>Delete</MenuItem>
      </Menu>
    </Card>
  );
}