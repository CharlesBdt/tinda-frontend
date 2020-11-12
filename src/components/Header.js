import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'utils/auth';
import 'style/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';

function Header() {
  const auth = useAuth();

  return (
    <div className="header">
      <Link to="/profile">
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>

      {auth.user ? (
        <p>
          Je suis co{' '}
          <button type="button" onClick={() => auth.signout()}>
            Signout
          </button>
        </p>
      ) : (
        <p>Je suis pas co</p>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt=""
        />
      </Link>

      <Link to="/messages">
        <IconButton>
          <ForumIcon fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
