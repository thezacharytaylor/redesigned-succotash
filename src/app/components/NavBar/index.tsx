import * as React from 'react';
import styled from 'styled-components/macro';
import { Logo } from './Logo';
import { StyleConstants } from 'styles/StyleConstants';
import { Nav } from './Nav';
import { PageWrapper } from '../PageWrapper';

export function NavBar() {
  return (
    // TODO: Get a light gray bg on this, but Wrapper doesnt show bg-x, but PageWrapper does, but doesn't cover the whole thing
    <Wrapper className="">
      <PageWrapper>
        <Logo />
        <Nav />
      </PageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 #00141b;
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: oklch(var(--p));
  z-index: 2;

  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
