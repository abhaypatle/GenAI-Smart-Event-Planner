function MultiAgentDashboard() {
  const agents = [
    {
      name: "Event Planning Agent",
      status: "Completed",
      output: "Wedding timeline generated",
    },
    {
      name: "Budget Agent",
      status: "Completed",
      output: "Budget optimized by 18%",
    },
    {
      name: "Vendor Agent",
      status: "Running",
      output: "Searching local vendors",
    },
    {
      name: "Negotiation Agent",
      status: "Pending",
      output: "Waiting for quotations",
    },
    {
      name: "Invoice Agent",
      status: "Ready",
      output: "Invoice template generated",
    },
  ];

  return (
    <div
      style={{
        background: "white",
        padding: "24px",
        borderRadius: "12px",
      }}
    >
      <h2>Multi-Agent AI Workspace</h2>

      {agents.map((agent) => (
        <div
          key={agent.name}
          style={{
            border: "1px solid #ddd",
            marginTop: "12px",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          <h3>{agent.name}</h3>
          <p>Status: {agent.status}</p>
          <p>{agent.output}</p>
        </div>
      ))}
    </div>
  );
}

export default MultiAgentDashboard;