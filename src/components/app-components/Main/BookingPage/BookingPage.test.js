import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

test('renders page title', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
});
