import React from 'react';
import Players from 'app/components/Players';
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
          <Players />
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
