import React from 'react';
import { screen } from '@testing-library/react';
import { render } from './test-utils';
import App from './App';

test('renders initial app', () => {
  render(<App />);
  const linkElement = screen.getByText(/madrid/i);
  expect(linkElement).toBeInTheDocument();
});
