import React from 'react';
import { useAuth } from 'utils/auth';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function ProfileSettings() {
  const auth = useAuth();

  return (
    <Grid item>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => auth.signout()}
      >
        Log out
      </Button>
    </Grid>
  );
}

export default ProfileSettings;
