import React from 'react';
import Golfers from 'app/components/Golfers';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';

const homeHeader = {
  color: 'white',
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kinetic Cup</title>
      </Helmet>
      <NavBar />
      <PageWrapper>
        <div className="container px-4 mx-auto">
          <h1 style={homeHeader} className="pb-4 underlin">
            Leaderboard
          </h1>
          <Golfers />
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
