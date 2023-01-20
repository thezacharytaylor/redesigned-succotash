/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

import { App } from '../index';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

const store = configureAppStore();

test('should render and match header text', () => {
  const domTree = renderer
    .create(
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>,
    )
    .toJSON();
  expect(domTree).toMatchSnapshot();
});
