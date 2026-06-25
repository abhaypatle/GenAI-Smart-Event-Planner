function AdminPanel() {
  const stats = [
    { title: "Total Users", value: "80" },
    { title: "Customers", value: "45" },
    { title: "Vendors", value: "120" },
    { title: "Events", value: "25" },
    { title: "Invoices", value: "32" },
    { title: "AI Plans", value: "58" },
  ];

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Admin Panel</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
        {stats.map((item) => (
          <div key={item.title} style={{ background: "#f3f4f6", padding: "16px", borderRadius: "10px" }}>
            <p>{item.title}</p>
            <h2>{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;