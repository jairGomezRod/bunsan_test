import { render, screen } from '@testing-library/react';
import AddEmplyeeModal from './index';

test('renders modal', () => {
  render(
    <AddEmplyeeModal 
      show={true} 
    />
  );
  const titleElement = screen.getByText(/Add employee/i);
  expect(titleElement).toBeInTheDocument();
});

test('render close modal button', () => {
  render(
    <AddEmplyeeModal
      show={true}  
    />
  );
  const signInButton = screen.getByText(/close/i)
  expect(signInButton).toBeInTheDocument();
});

test('render select employee', () => {
  render(
    <AddEmplyeeModal
      show={true}  
    />
  );
  const signInButton = screen.getByText(/Select employee/i)
  expect(signInButton).toBeInTheDocument();
});
