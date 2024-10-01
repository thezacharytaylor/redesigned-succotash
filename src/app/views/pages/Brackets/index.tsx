import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import { PageWrapper } from 'app/components/PageWrapper';
import Bracket from 'app/components/Bracket';

const Brackets = () => {
  return (
    <>
      <Helmet>Brackets</Helmet>
      <NavBar />
      <PageWrapper>
        <Bracket />
      </PageWrapper>
    </>
  );
};

export default Brackets;
