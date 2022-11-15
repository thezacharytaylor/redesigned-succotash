import React from 'react';
import MaterialButton from 'app/components/materialButton';
import Todo from 'app/components/Todo';

const homeHeader = {
  color: 'white',
};

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 style={homeHeader} className="underlin pb-4">
        Homepage
      </h1>
      <MaterialButton />
      <Todo />
    </div>
  );
};

export default Home;
