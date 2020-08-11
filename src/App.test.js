import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Project Greenprint', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Project Greenprint/i);
  expect(titleElement).toBeInTheDocument();
});
