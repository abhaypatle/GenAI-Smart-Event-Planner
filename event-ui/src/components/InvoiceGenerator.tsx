function InvoiceGenerator() {
  const items = [
    { service: "Catering", vendor: "Shree Caterers", amount: 250000 },
    { service: "Decoration", vendor: "Royal Decor", amount: 100000 },
    { service: "Photography", vendor: "Pixel Studio", amount: 50000 },
    { service: "DJ", vendor: "DJ Beats", amount: 30000 },
  ];

  const total = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Invoice Generator</h2>

      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Service</th>
            <th>Vendor</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.service}>
              <td>{item.service}</td>
              <td>{item.vendor}</td>
              <td>₹{item.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total Bill: ₹{total.toLocaleString()}</h3>
    </div>
  );
}

export default InvoiceGenerator;