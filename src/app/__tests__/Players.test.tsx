/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

import Players from 'app/components/Players';
import { render } from '@testing-library/react';

const store = configureAppStore();
const user = userEvent.setup();

describe('Load app', () => {
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
});

describe('Add player', () => {
  test('Should add fake player to leaderboard', () => {
    act(() => {
      render(
        <Provider store={store}>
          <HelmetProvider>
            <Players />
          </HelmetProvider>
        </Provider>,
      );
    });
    // TODO: Setup addition
    // TODO: Setup confirming player was added
  });
});
