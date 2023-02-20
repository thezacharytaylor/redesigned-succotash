/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Kinetic Cup"
        defaultTitle="Kinetic Cup"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Rooftop golf for charity." />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <AppRoutes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
