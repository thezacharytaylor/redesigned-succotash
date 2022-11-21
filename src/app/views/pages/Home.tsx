import React from 'react';
import MaterialButton from 'app/components/materialButton';
import Todo from 'app/components/Todo';
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
      <Helmet>Home</Helmet>
      <NavBar />
      <PageWrapper>
        <div className="container px-4 mx-auto">
          <h1 style={homeHeader} className="pb-4 underlin">
            Homepage
          </h1>
          <MaterialButton />
          <Golfers />
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
