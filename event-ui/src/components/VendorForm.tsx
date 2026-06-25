import { useState } from "react";
import { api } from "../api/api";

const cityAreas: Record<string, string[]> = {
  Nagpur: ["Dharampeth", "Sitabuldi", "Manish Nagar", "Wardha Road"],
  Pune: ["Hinjewadi", "Baner", "Kothrud", "Wakad"],
  Mumbai: ["Andheri", "Bandra", "Dadar", "Powai"],
};

function VendorForm() {
  const [form, setForm] = useState({
    vendor_name: "",
    vendor_type: "catering",
    phone: "",
    city: "Nagpur",
    address: "Dharampeth",
    rating: 4.5,
    min_price: 10000,
    max_price: 50000,
    is_available: true,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "city") {
      setForm({
        ...form,
        city: value,
        address: cityAreas[value][0],
      });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const addVendor = async () => {
    await api.post("/vendors/", {
      ...form,
      rating: Number(form.rating),
      min_price: Number(form.min_price),
      max_price: Number(form.max_price),
    });

    alert("Vendor added successfully");
  };

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Add Vendor / Shopkeeper</h2>

      <input name="vendor_name" placeholder="Vendor Name" onChange={handleChange} />

      <select name="vendor_type" value={form.vendor_type} onChange={handleChange}>
        <option value="catering">Catering</option>
        <option value="decoration">Decoration</option>
        <option value="photography">Photography</option>
        <option value="dj">DJ</option>
        <option value="venue">Venue</option>
        <option value="makeup">Makeup Artist</option>
        <option value="transport">Transport</option>
      </select>

      <input name="phone" placeholder="Phone Number" onChange={handleChange} />

      <select name="city" value={form.city} onChange={handleChange}>
        {Object.keys(cityAreas).map((city) => (
          <option key={city}>{city}</option>
        ))}
      </select>

      <select name="address" value={form.address} onChange={handleChange}>
        {cityAreas[form.city].map((area) => (
          <option key={area}>{area}</option>
        ))}
      </select>

      <input name="rating" value={form.rating} onChange={handleChange} />
      <input name="min_price" value={form.min_price} onChange={handleChange} />
      <input name="max_price" value={form.max_price} onChange={handleChange} />

      <br />
      <br />

      <button onClick={addVendor}>Add Vendor</button>
    </div>
  );
}

export default VendorForm;