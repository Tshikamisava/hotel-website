import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ReservationForm() {
  const { id } = useParams();
  const [reservationData, setReservationData] = useState({
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
  });

  const handleInputChange = (e) => {
    setReservationData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle reservation submission and store reservation data in Firestore
  };

  return (
    <div>
      <h2>Reservation Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Check-in Date:
          <input
            type="date"
            name="checkInDate"
            value={reservationData.checkInDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Check-out Date:
          <input
            type="date"
            name="checkOutDate"
            value={reservationData.checkOutDate}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Guests:
          <input
            type="number"
            name="guests"
            value={reservationData.guests}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default ReservationForm;
