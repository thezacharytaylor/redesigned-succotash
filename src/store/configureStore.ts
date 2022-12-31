import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from './reducers';

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: defaultMiddleware => [...defaultMiddleware()],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
  });

  return store;
}
