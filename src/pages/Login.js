import React from 'react';
import { useAuth } from 'utils/auth';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="mainGrid"
          spacing={3}
        >
          <Grid item>
            <h3>Tinda</h3>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => auth.signin()}
            >
              Log in with Google
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Login;
