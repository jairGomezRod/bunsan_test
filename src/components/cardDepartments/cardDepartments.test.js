import { render, screen } from '@testing-library/react';
import CardDepartments from './index';
import {BrowserRouter as Router} from 'react-router-dom';

test('renders cards', () => {
  const departments = [
    {
      id: 1,
      name: "Department 1",
      expense: 1000,
    }
  ];
  render(
    <Router>
      <CardDepartments 
        data={departments} 
      />
    </Router>
  );
  const titleElement = screen.getByText(/Expense allocation/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders add card when no data', () => {
  render(
    <CardDepartments/>
  );
  const titleElement = screen.getByText(/Add more/i);
  expect(titleElement).toBeInTheDocument();
});

