import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import Players from 'app/components/Players';

const Leaderboard = () => {
  return (
    <>
      <Helmet>Leaderboard</Helmet>
      <NavBar />
      <PageWrapper>
        <Players />
      </PageWrapper>
    </>
  );
};

export default Leaderboard;
