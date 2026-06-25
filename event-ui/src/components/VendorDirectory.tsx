import { useEffect, useState } from "react";
import { api } from "../api/api";

type Vendor = {
  id: number;
  vendor_name: string;
  vendor_type: string;
  phone: string;
  city: string;
  rating: number;
  min_price: number;
  max_price: number;
};

function VendorDirectory() {
  const [vendors, setVendors] = useState<Vendor[]>([]);

  const loadVendors = async () => {
    const response = await api.get("/vendors/");
    setVendors(response.data);
  };

  useEffect(() => {
    loadVendors();
  }, []);

  return (
    <div style={{ background: "white", padding: "24px", marginTop: "30px" }}>
      <h2>Vendor Directory</h2>

      {vendors.length === 0 ? (
        <p>No vendors found. Add vendors from Swagger first.</p>
      ) : (
        <table width="100%" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>City</th>
              <th>Phone</th>
              <th>Rating</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.vendor_name}</td>
                <td>{vendor.vendor_type}</td>
                <td>{vendor.city}</td>
                <td>{vendor.phone}</td>
                <td>{vendor.rating}</td>
                <td>₹{vendor.min_price} - ₹{vendor.max_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default VendorDirectory;