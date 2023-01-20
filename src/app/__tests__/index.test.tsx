import React from 'react';
import { render, screen } from '@testing-library/react';

import { App } from '../index';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

import renderer from 'react-test-renderer';

const store = configureAppStore();

test('should render and match header text', () => {
  const domTree = renderer
    .create(
      <Provider store={store}>
        <HelmetProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </HelmetProvider>
      </Provider>,
    )
    .toJSON();
  expect(domTree).toMatchSnapshot();
});
