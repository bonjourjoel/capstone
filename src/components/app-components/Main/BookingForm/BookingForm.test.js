import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test('input date exists', () => {
  render(<BookingForm />);
  const input = screen.getByLabelText('Choose date');
  expect(input).toBeInTheDocument();
});

test('input date is required', () => {
  render(<BookingForm />);
  const input = screen.getByLabelText('Choose date');
  expect(input).toHaveProperty("required");
});

test('input date is missing and shows error message', async () => {
  render(<BookingForm />);
  const input = screen.getByLabelText('Choose date');
  fireEvent.change(input, {target: {value: ''}})
  const errMsg = screen.getByText('Please select a date.');
  expect(errMsg).toBeInTheDocument();
});

test('input date is missing and button submit is disabled', async () => {
  render(<BookingForm />);
  const input = screen.getByLabelText('Choose date');
  fireEvent.change(input, {target: {value: ''}})
  const button = screen.getByRole('button')
  expect(button).toBeDisabled();
});

test('input date is correct and button submit is enabled', async () => {
  render(<BookingForm />);
  const button = screen.getByRole('button')
  expect(button).toBeEnabled();
});
