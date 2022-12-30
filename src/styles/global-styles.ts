import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
import '../styles/tailwind.css';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding-top: ${StyleConstants.NAV_BAR_HEIGHT};

  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .slide-vertical-enter {
    opacity: 0;
    transform: translateY(-20px);
  }

  .slide-vertical-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 300ms;
  }

  .slide-vertical-exit {
    opacity: 1;
    transform: translateY(0);
  }

  .slide-vertical-exit-active {
    opacity: 0;
    transition: all 300ms;
    transform: translateY(-20px);
  }

  .slide-horizontal-enter {
    opacity: 0;
    transform: translateX(20px);
  }

  .slide-horizontal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 300ms;
  }

  .slide-horizontal-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .slide-horizontal-exit-active {
    opacity: 0;
    transition: all 300ms;
    transform: translateX(20px);
  }
`;
