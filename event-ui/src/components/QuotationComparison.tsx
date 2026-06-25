function QuotationComparison() {
  const vendors = [
    {
      name: "Vendor A",
      cost: 70000,
      rating: 4.4,
      available: "Yes",
      score: 82,
      suggestion: "Good quality but costly. Negotiate around ₹60,000.",
    },
    {
      name: "Vendor B",
      cost: 55000,
      rating: 4.6,
      available: "Yes",
      score: 94,
      suggestion: "Best value option. Strong recommendation.",
    },
    {
      name: "Vendor C",
      cost: 62000,
      rating: 4.2,
      available: "No",
      score: 70,
      suggestion: "Not recommended due to availability issue.",
    },
  ];

  const bestVendor = vendors.reduce((best, current) =>
    current.score > best.score ? current : best
  );

  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
        marginTop: "20px",
      }}
    >
      <h2>Quotation Comparison AI</h2>

      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Cost</th>
            <th>Rating</th>
            <th>Availability</th>
            <th>Best Value Score</th>
          </tr>
        </thead>

        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.name}>
              <td>{vendor.name}</td>
              <td>₹{vendor.cost.toLocaleString()}</td>
              <td>{vendor.rating}</td>
              <td>{vendor.available}</td>
              <td>{vendor.score}/100</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>AI Recommendation</h3>
      <p>
        Recommended Vendor: <b>{bestVendor.name}</b>
      </p>

      <h3>Negotiation Suggestion</h3>
      <p>{bestVendor.suggestion}</p>
    </div>
  );
}

export default QuotationComparison;