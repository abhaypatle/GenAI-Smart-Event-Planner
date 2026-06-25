type Booking = {
  eventType: string;
  city: string;
  area: string;
  guests: number;
  budget: number;
  total: number;
  status: string;
};

function BookingHistory({ bookings }: { bookings: Booking[] }) {
  return (
    <div className="card">
      <h2>Booking History</h2>

      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table width="100%" cellPadding="10">
          <thead>
            <tr>
              <th>Event</th>
              <th>City</th>
              <th>Area</th>
              <th>Guests</th>
              <th>Budget</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.eventType}</td>
                <td>{booking.city}</td>
                <td>{booking.area}</td>
                <td>{booking.guests}</td>
                <td>₹{booking.budget.toLocaleString()}</td>
                <td>₹{booking.total.toLocaleString()}</td>
                <td>{booking.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingHistory;