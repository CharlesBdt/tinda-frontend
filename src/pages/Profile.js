import React from 'react';
import Header from 'components/Header';
import ProfileContent from 'components/ProfileContent';
import Grid from '@material-ui/core/Grid';

function Profile() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Header />
      <ProfileContent />
    </Grid>
  );
}

export default Profile;
