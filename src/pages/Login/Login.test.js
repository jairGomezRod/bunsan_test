import { render, screen } from '@testing-library/react';
import Login from './index';

test('renders login view', () => {
  render(<Login />);
  const titleElement = screen.getByText(/Please sign in/i);
  expect(titleElement).toBeInTheDocument();
});

test('render form', () => {
  render(<Login />);
  const signInButton = screen.getByRole('button')
  expect(signInButton).toBeInTheDocument();
});
