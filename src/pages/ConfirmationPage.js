import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed</h2>
      <p>have a nice day</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default ConfirmationPage;
