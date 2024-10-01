import * as React from 'react';
import styled from 'styled-components/macro';

export function Logo() {
  return (
    <Wrapper>
      <img
        src="/logo192.png"
        alt="logo"
        width="25"
        height="25"
        className="mr-1.5 pb-2"
      />
      <Title>Cooking: KineticCup</Title>
      <Description></Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  font-size: 0.875rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;
