import { render, screen } from '@testing-library/react';
import AddEmplyeeButton from './index';

test('renders add employee button', () => {
  render(
    <AddEmplyeeButton 
      id="1" 
    />
  );
  const titleElement = screen.getByText(/Add employee/i);
  expect(titleElement).toBeInTheDocument();
});
