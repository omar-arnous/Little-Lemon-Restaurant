import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});

// screen.getByText("BookingForm");
