import { useState } from "react";

const localRates: any = {
  Nagpur: {
    catering: "₹300 - ₹700 per plate",
    decoration: "₹30,000 - ₹2,00,000",
    photography: "₹20,000 - ₹1,00,000",
    dj: "₹10,000 - ₹50,000",
  },
  Pune: {
    catering: "₹500 - ₹1,200 per plate",
    decoration: "₹50,000 - ₹3,00,000",
    photography: "₹40,000 - ₹2,00,000",
    dj: "₹20,000 - ₹80,000",
  },
};

function LocalRateAdvisor() {
  const [city, setCity] = useState("Nagpur");
  const [service, setService] = useState("catering");

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Local Rate Advisor</h2>

      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option>Nagpur</option>
        <option>Pune</option>
      </select>

      <select value={service} onChange={(e) => setService(e.target.value)}>
        <option value="catering">Catering</option>
        <option value="decoration">Decoration</option>
        <option value="photography">Photography</option>
        <option value="dj">DJ</option>
      </select>

      <h3>Market Rate: {localRates[city][service]}</h3>
    </div>
  );
}

export default LocalRateAdvisor;