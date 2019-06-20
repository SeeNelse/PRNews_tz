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
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  card: {
    width: 350,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export const Profile = ({ OpenAccountModal }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title="Name"
        subheader="Address"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Card: 0000 **** **** 0000
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Payment: PayPal
        </Typography>
      </CardContent>
      <Menu
        id="simple-menu"
        anchorEl={ anchorEl }
        keepMounted
        open={ Boolean(anchorEl) }
        onClose={ handleClose }
        onClick={ handleClose }
      >
        <MenuItem onClick={ () => OpenAccountModal() }>Edit</MenuItem>
        <MenuItem onClick={ handleClose }>Delete</MenuItem>
      </Menu>
    </Card>
  );
}