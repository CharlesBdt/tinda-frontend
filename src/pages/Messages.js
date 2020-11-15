import React from 'react';
import Header from 'components/Header';
import MessagesContent from 'components/MessagesContent';
import Grid from '@material-ui/core/Grid';

function Messages() {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Header />
      <MessagesContent />
    </Grid>
  );
}

export default Messages;
