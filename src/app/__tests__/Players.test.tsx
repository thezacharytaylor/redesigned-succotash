import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import Players from 'app/components/Players';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

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
    const domTree = renderer
      .create(
        <Provider store={store}>
          <HelmetProvider>
            <Players />
          </HelmetProvider>
        </Provider>,
      )
      .toJSON();
  });
});
