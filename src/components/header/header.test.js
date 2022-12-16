import { render, screen } from '@testing-library/react';
import Header from './index';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders logo-title', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const titleElement = screen.getByText(/Contable App/i);
  expect(titleElement).toBeInTheDocument();
});

test('render logout button', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const signInButton = screen.getByRole('button')
  expect(signInButton).toBeInTheDocument();
});
