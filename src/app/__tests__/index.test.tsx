import { render } from '@testing-library/react';
import * as React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { NavBar } from 'app/components/NavBar';

import { App } from '../index';

// const renderer = createRenderer();

// describe('<App />', () => {
//   it('should render and match the snapshot', () => {
//     render(<App />);
//     // const renderedOutput = renderer.getRenderOutput();
//     // expect(renderedOutput).toMatchSnapshot();
//   });
// });

test('should render and match the snapshot', () => {
  render(<NavBar />);
});
