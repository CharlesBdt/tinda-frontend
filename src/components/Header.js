import React from 'react';
import { Link } from 'react-router-dom';
import 'style/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

function Header() {
  return (
    <Grid item container justify="space-between">
      <Link to="/profile">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>

      <Link to="/">
        <IconButton>
          <img
            className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt=""
          />
        </IconButton>
      </Link>

      <Link to="/messages">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </Grid>
  );
}

export default Header;
