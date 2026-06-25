function App() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "250px",
          background: "#111827",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>GenAI Planner</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>Dashboard</li>
          <li>Create Event</li>
          <li>AI Planner</li>
          <li>Vendors</li>
          <li>Budget</li>
          <li>Negotiation AI</li>
          <li>Invoices</li>
          <li>Analytics</li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: "30px" }}>
        <h1>🚀 GenAI Smart Event Planner</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ padding: "20px", border: "1px solid #ddd" }}>
            Events
            <h2>25</h2>
          </div>

          <div style={{ padding: "20px", border: "1px solid #ddd" }}>
            Vendors
            <h2>120</h2>
          </div>

          <div style={{ padding: "20px", border: "1px solid #ddd" }}>
            Revenue
            <h2>₹12L</h2>
          </div>

          <div style={{ padding: "20px", border: "1px solid #ddd" }}>
            AI Plans
            <h2>58</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;