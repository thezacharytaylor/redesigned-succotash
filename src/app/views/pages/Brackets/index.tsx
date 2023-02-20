import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import Players from 'app/components/Players';

const Brackets = () => {
  return (
    <>
      <Helmet>Brackets</Helmet>
      <NavBar />
      <PageWrapper>
        <Players />
      </PageWrapper>
    </>
  );
};

export default Brackets;
