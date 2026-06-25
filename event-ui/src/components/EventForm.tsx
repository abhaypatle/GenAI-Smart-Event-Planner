import { useState } from "react";
import { api } from "../api/api";

const cityData: Record<string, string[]> = {
  Nagpur: ["Dharampeth", "Sitabuldi", "Manish Nagar", "Wardha Road"],
  Pune: ["Hinjewadi", "Baner", "Kothrud", "Wakad"],
  Mumbai: ["Andheri", "Bandra", "Dadar", "Powai"],
};

function EventForm() {
  const [form, setForm] = useState({
    customer_id: 1,
    event_type: "Wedding",
    city: "Nagpur",
    location: "Dharampeth",
    event_date: "2026-07-10",
    guest_count: 300,
    budget: 500000,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "city") {
      setForm({
        ...form,
        city: value,
        location: cityData[value][0],
      });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const createEvent = async () => {
    await api.post("/events/", {
      ...form,
      customer_id: Number(form.customer_id),
      guest_count: Number(form.guest_count),
      budget: Number(form.budget),
    });

    setMessage("Event created successfully!");
  };

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Create Event</h2>

      <select name="event_type" value={form.event_type} onChange={handleChange}>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Corporate</option>
        <option>Engagement</option>
      </select>

      <select name="city" value={form.city} onChange={handleChange}>
        {Object.keys(cityData).map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>

      <select name="location" value={form.location} onChange={handleChange}>
        {cityData[form.city].map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      <input name="event_date" type="date" value={form.event_date} onChange={handleChange} />
      <input name="guest_count" value={form.guest_count} onChange={handleChange} />
      <input name="budget" value={form.budget} onChange={handleChange} />

      <button onClick={createEvent}>Create Event</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default EventForm;