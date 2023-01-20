import React from 'react';
import { render, screen } from '@testing-library/react';

import { NavBar } from 'app/components/NavBar';
import { App } from '../index';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

const store = configureAppStore();

test('should render and match the snapshot', () => {
  render(
    <Provider store={store}>
      <HelmetProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HelmetProvider>
    </Provider>,
  );
  const headerElement = screen.getByText('Kinetic Cup');
  expect(headerElement).toBeInTheDocument();
});
