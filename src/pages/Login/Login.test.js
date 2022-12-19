import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Login from './index';
import {BrowserRouter as Router} from 'react-router-dom';
import { renderWithProviders } from "../../utils/utils-for-tests";

test('renders login view', () => {

  renderWithProviders(
    <Router>
      <Login />
    </Router>
  );
  const titleElement = screen.getByText(/Please sign in/i);
  expect(titleElement).toBeInTheDocument();
});

test('render form', () => {
  renderWithProviders(
    <Router>
      <Login />
    </Router>
  );
  const signInButton = screen.getByRole('button')
  expect(signInButton).toBeInTheDocument();
});

test('Show error on bad login', async () => {
  renderWithProviders(
    <Router>
      <Login />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const signInButton = screen.getByRole('button')

  fireEvent.change(emailInput, {
    target: {value: 'test@test.com'},
  });

  fireEvent.change(passwordInput, {
    target: {value: 'jh0nD0eBunsan'},
  })
  await userEvent.click(signInButton);
  
  expect(screen.getByTestId("error-message")).toBeInTheDocument();
});

test('Show disabled button on bad format', async () => {
  renderWithProviders(
    <Router>
      <Login />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(/Email Address/i);
  const passwordInput = screen.getByPlaceholderText(/Password/i);
  const signInButton = screen.getByRole('button')

  fireEvent.change(emailInput, {
    target: {value: 'test@test.com'},
  });

  fireEvent.change(passwordInput, {
    target: {value: '12345'},
  })
  
  expect(signInButton).toBeDisabled();
});
