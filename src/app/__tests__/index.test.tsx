import { render, screen } from '@testing-library/react';

import { NavBar } from 'app/components/NavBar';
import { App } from '../index';

test('should render and match the snapshot', () => {
  render(<NavBar />);
  const headerElement = screen.getByText('Kinetic Cup');
  expect(headerElement).toBeInTheDocument();
});
