import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Players from 'app/components/Players';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

const store = configureAppStore();

test('should render and match the snapshot', () => {
  const domTree = renderer
    .create(
      <Provider store={store}>
        <HelmetProvider>
          <Players />
        </HelmetProvider>
      </Provider>,
    )
    .toJSON();
  expect(domTree).toMatchSnapshot(); //
});
