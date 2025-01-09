import * as React from 'react';
import styled from 'styled-components/macro';
// import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import {
  ChartBarIcon,
  NewspaperIcon,
  TrophyIcon,
} from '@heroicons/react/24/solid';
// import { ReactComponent as GithubIcon } from './assets/github-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <Item
        href="https://cansahin.gitbook.io/react-boilerplate-cra-template/"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <NewspaperIcon className="w-5 h-5 mr-1" />
        Documentation
      </Item>
      <Item href="/leaderboard" target="" title="Leaderboard">
        <ChartBarIcon className="w-5 h-5 mr-1" />
        Leaderboard
      </Item>
      <Item href="/brackets" target="" title="Brackets">
        <TrophyIcon className="w-5 h-5 mr-1" />
        Brackets
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
