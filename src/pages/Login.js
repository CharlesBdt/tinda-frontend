import React from 'react';
import { useAuth } from 'utils/auth';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Login() {
  const auth = useAuth();

  return (
    <div>
      {auth.user ? (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      ) : (
        <div>
          <p>You are not logged in</p>
          <Button variant="outlined" color="primary" onClick={() => auth.signin()}>
            Log in with Google
          </Button>
        </div>
      )}
    </div>
  );
}

export default Login;
