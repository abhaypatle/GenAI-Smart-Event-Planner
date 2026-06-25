import { useEffect, useState } from "react";
import { api } from "../api/api";

type EventItem = {
  id: number;
  customer_id: number;
  event_type: string;
  city: string;
  location: string;
  event_date: string;
  guest_count: number;
  budget: number;
  status: string;
};

function EventList() {
  const [events, setEvents] = useState<EventItem[]>([]);

  const loadEvents = async () => {
    const response = await api.get("/events/");
    setEvents(response.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px", marginTop: "20px" }}>
      <h2>Event List</h2>

      {events.length === 0 ? (
        <p>No events found.</p>
      ) : (
        <table width="100%" cellPadding="10">
          <thead>
            <tr>
              <th>Type</th>
              <th>City</th>
              <th>Location</th>
              <th>Date</th>
              <th>Guests</th>
              <th>Budget</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.event_type}</td>
                <td>{event.city}</td>
                <td>{event.location}</td>
                <td>{event.event_date}</td>
                <td>{event.guest_count}</td>
                <td>₹{event.budget.toLocaleString()}</td>
                <td>{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EventList;