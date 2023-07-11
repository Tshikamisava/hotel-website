
import React from 'react';
import { useParams } from 'react-router-dom';

function RoomDetail() {
  const { id } = useParams();

  // Fetch room details from Firestore using the room ID

  return (
    <div>
      <h2>Room Detail</h2>
      {/* Display room details */}
    </div>
  );
}

export default RoomDetail;
