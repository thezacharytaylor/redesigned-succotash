import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import Golfers from 'app/components/Golfers';

const Leaderboard = () => {
  return (
    <>
      <Helmet>Leaderboard</Helmet>
      <NavBar />
      <PageWrapper>
        <Golfers />
      </PageWrapper>
    </>
  );
};

export default Leaderboard;
