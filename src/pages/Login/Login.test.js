import { render, screen } from '@testing-library/react';
import Login from './index';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders login view', () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const titleElement = screen.getByText(/Please sign in/i);
  expect(titleElement).toBeInTheDocument();
});

test('render form', () => {
  render(
    <Router>
      <Login />
    </Router>
  );
  const signInButton = screen.getByRole('button')
  expect(signInButton).toBeInTheDocument();
});
