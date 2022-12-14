import styled from 'styled-components/macro';

export const A = styled.a`
  color: green;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
