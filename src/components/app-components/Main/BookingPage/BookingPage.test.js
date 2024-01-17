import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test('renders page title', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
});
