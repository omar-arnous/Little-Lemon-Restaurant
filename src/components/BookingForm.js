import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';

import { submitAPI } from '../data/DataApi';

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(
    availableTimes.map((times) => <option>{times}</option>)
  );
  const [guests, setGuests] = useState(0);
  const [occasion, setOccasion] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [number, setNumber] = useState('');

  const handleDateChange = (e) => {
    const chosenDate = e.target.value;
    setDate(chosenDate);

    const date = new Date(chosenDate);
    updateTimes(date);
    setTime(availableTimes.map((times) => <option>{times}</option>));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    redirect('/confirm');
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="grid-item">
        <label htmlFor="f-name">First Name</label>
        <input
          type="text"
          id="f-name"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
      </div>
      <div className="grid-item">
        <label htmlFor="l-name">Last Name</label>
        <input
          type="text"
          id="l-name"
          placeholder="Last Name"
          required
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
      </div>
      <div className="grid-item">
        <label htmlFor="number">Phone Number</label>
        <input
          type="tel"
          id="number"
          placeholder="096..."
          required
          minLength={10}
          maxLength={10}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="grid-item">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
        />
      </div>

      <div className="grid-item">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          // value={time}
          // onChange={(e) => setTime(e.target.value)}
        >
          {time}
        </select>
      </div>
      <div className="grid-item">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>
      <div className="grid-item">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </div>
      <Link to="/confirm" className="btn">
        Reserve
      </Link>
    </form>
  );
};

export default BookingForm;
