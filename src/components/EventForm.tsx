import { useState } from "react";
import { api } from "../api/api";

function EventForm() {
  const [form, setForm] = useState({
    customer_id: 1,
    event_type: "wedding",
    city: "Nagpur",
    location: "Dharampeth",
    event_date: "2026-07-10",
    guest_count: 300,
    budget: 500000,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createEvent = async () => {
    const payload = {
      ...form,
      customer_id: Number(form.customer_id),
      guest_count: Number(form.guest_count),
      budget: Number(form.budget),
    };

    await api.post("/events/", payload);
    setMessage("Event created successfully!");
  };

  return (
    <div style={{ background: "white", padding: "24px", marginTop: "30px" }}>
      <h2>Create Event</h2>

      <input name="event_type" value={form.event_type} onChange={handleChange} />
      <input name="city" value={form.city} onChange={handleChange} />
      <input name="location" value={form.location} onChange={handleChange} />
      <input name="event_date" type="date" value={form.event_date} onChange={handleChange} />
      <input name="guest_count" value={form.guest_count} onChange={handleChange} />
      <input name="budget" value={form.budget} onChange={handleChange} />

      <button onClick={createEvent}>Create Event</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EventForm;