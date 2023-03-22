import { useReducer } from 'react';

import BookingForm from '../components/BookingForm';
import { fetchAPI } from '../data/DataApi';

const Booking = () => {
  const updateTimes = (date) => {
    return fetchAPI(date);
  };

  const initializeTimes = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />;
};

export default Booking;
