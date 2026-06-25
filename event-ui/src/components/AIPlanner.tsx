import { useState } from "react";
import { api } from "../api/api";

function AIPlanner() {
  const [form, setForm] = useState({
    event_type: "wedding",
    city: "Nagpur",
    area: "Dharampeth",
    guest_count: 300,
    budget: 500000,
  });

  const [result, setResult] = useState<any>(null);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generatePlan = async () => {
    const payload = {
      ...form,
      guest_count: Number(form.guest_count),
      budget: Number(form.budget),
    };

    const response = await api.post("/ai/plan", payload);
    setResult(response.data);
  };

  return (
    <div style={{ background: "white", padding: "24px", marginTop: "30px" }}>
      <h2>AI Event Planner</h2>

      <input name="event_type" value={form.event_type} onChange={handleChange} />
      <input name="city" value={form.city} onChange={handleChange} />
      <input name="area" value={form.area} onChange={handleChange} />
      <input name="guest_count" value={form.guest_count} onChange={handleChange} />
      <input name="budget" value={form.budget} onChange={handleChange} />

      <button onClick={generatePlan}>Generate AI Plan</button>

      {result && (
        <div>
          <h3>Result</h3>
          <p>Estimated Cost: ₹{result.estimated_cost}</p>
          <p>Status: {result.budget_status}</p>
          <p>{result.ai_summary}</p>
        </div>
      )}
    </div>
  );
}

export default AIPlanner;