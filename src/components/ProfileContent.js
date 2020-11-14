import React from 'react';
import { useAuth } from 'utils/auth';
import Button from '@material-ui/core/Button';

function ProfileSettings() {
  const auth = useAuth();

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => auth.signout()}
    >
      Log out
    </Button>
  );
}

export default ProfileSettings;
