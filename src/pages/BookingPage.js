import { useReducer } from 'react';

import BookingForm from '../components/BookingForm';

const Booking = () => {
  const updateTimes = () => {
    return initializeTimes;
  };

  const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  const times = initializeTimes();

  const [availableTimes, dispatch] = useReducer(updateTimes, times);

  return <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />;
};

export default Booking;
