import { useState } from "react";

const cityData: any = {
  Nagpur: ["Dharampeth", "Sitabuldi", "Manish Nagar", "Wardha Road"],
  Pune: ["Hinjewadi", "Baner", "Kothrud", "Wakad"],
  Mumbai: ["Andheri", "Bandra", "Dadar", "Powai"],
};

const eventRates: any = {
  Wedding: 1200,
  Birthday: 500,
  Corporate: 1500,
  Engagement: 900,
};

function EventForm() {
  const [city, setCity] = useState("Nagpur");
  const [area, setArea] = useState("Dharampeth");
  const [eventType, setEventType] = useState("Wedding");
  const [guests, setGuests] = useState(100);

  const rate = eventRates[eventType];
  const estimatedBudget = guests * rate;

  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>Create Event</h2>

      <div style={{ display: "grid", gap: "12px" }}>
        <label>City</label>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setArea(cityData[e.target.value][0]);
          }}
        >
          {Object.keys(cityData).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <label>Area / Location</label>
        <select value={area} onChange={(e) => setArea(e.target.value)}>
          {cityData[city].map((a: string) => (
            <option key={a}>{a}</option>
          ))}
        </select>

        <label>Event Type</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate</option>
          <option>Engagement</option>
        </select>

        <label>Guest Count</label>
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />

        <label>Estimated Budget</label>
        <input value={`₹${estimatedBudget.toLocaleString()}`} readOnly />

        <label>Local Rate Suggestion</label>
        <input
          value={`₹${rate} per guest (${city} market rate)`}
          readOnly
        />

        <button
          style={{
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Create Event
        </button>
      </div>
    </div>
  );
}

export default EventForm;