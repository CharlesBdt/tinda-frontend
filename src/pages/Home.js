import React from 'react';
import Header from 'components/Header';
import TinderCards from 'components/TinderCards';
import SwipeButtons from 'components/SwipeButtons';
import Grid from '@material-ui/core/Grid';

function Home() {
  return (
    <Grid container direction="column" className="mainGrid">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </Grid>
  );
}

export default Home;
