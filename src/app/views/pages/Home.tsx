import React from 'react';
import MaterialButton from 'app/components/materialButton';
import Todo from 'app/components/Todo';
import Golfers from 'app/components/Golfers';

const homeHeader = {
  color: 'white',
};

const Home = () => {
  return (
    <div className="container px-4 mx-auto">
      <h1 style={homeHeader} className="pb-4 underlin">
        Homepage
      </h1>
      <MaterialButton />
      <Golfers />
    </div>
  );
};

export default Home;
