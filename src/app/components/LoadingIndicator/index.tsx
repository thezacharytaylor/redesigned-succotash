import * as React from 'react';
import styled, { keyframes } from 'styled-components/macro';

type Props = SvgProps;

export const LoadingIndicator = (props: Props) => (
  <Svg viewBox="-24 -24 48 48" small={props.small}>
    <Circle cx="0" cy="0" r="20" fill="none" strokeWidth="4"></Circle>
  </Svg>
);

const speed = 1.5;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 150;
    stroke-dashoffset: -24;
  }
  100% {
    stroke-dasharray: 0, 150;
    stroke-dashoffset: -124;
  }
`;

interface SvgProps {
  small?: boolean;
}

const Svg = styled.svg<SvgProps>`
  animation: ${rotate} ${speed * 1.75}s linear infinite;
  height: 1.25rem;
  width: 1.25rem;
  transform-origin: center;
`;

const Circle = styled.circle`
  animation: ${dash} ${speed}s ease-in-out infinite;
  stroke: green;
  stroke-linecap: round;
`;
