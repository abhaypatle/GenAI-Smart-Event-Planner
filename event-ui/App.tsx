import { useState } from "react";
import EventForm from "./components/EventForm";
import AIPlanner from "./components/AIPlanner";
import VendorDirectory from "./components/VendorDirectory";
import AgentTabs from "./components/AgentTabs";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      <aside style={{ width: "260px", background: "#111827", color: "white", padding: "24px" }}>
        <h2>GenAI Planner</h2>

        {[
          ["dashboard", "Dashboard"],
          ["event", "Create Event"],
          ["ai", "AI Planner"],
          ["vendors", "Vendors"],
          ["agents", "Agents"],
          ["budget", "AI Budget Prediction"],
          ["invoice", "Invoice Generator"],
        ].map(([key, label]) => (
          <p
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              cursor: "pointer",
              padding: "10px",
              background: activeTab === key ? "#2563eb" : "transparent",
              borderRadius: "8px",
            }}
          >
            {label}
          </p>
        ))}
      </aside>

      <main style={{ flex: 1, padding: "30px", background: "#f3f4f6" }}>
        <h1>GenAI Smart Event Planner</h1>

        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "event" && <EventForm />}
        {activeTab === "ai" && <AIPlanner />}
        {activeTab === "vendors" && <VendorDirectory />}
        {activeTab === "agents" && <Agents />}
        {activeTab === "budget" && <BudgetPrediction />}
        {activeTab === "invoice" && <InvoiceGenerator />}
      </main>
    </div>
  );
}

function Dashboard() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
      <Card title="Total Events" value="25" />
      <Card title="Vendors" value="120" />
      <Card title="AI Plans" value="58" />
      <Card title="Invoices" value="32" />
    </div>
  );
}

function Agents() {
  const [agent, setAgent] = useState("catering");

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Department Agents</h2>

      <select value={agent} onChange={(e) => setAgent(e.target.value)}>
        <option value="catering">Catering Agent</option>
        <option value="decorator">Decorator Agent</option>
        <option value="photographer">Photographer Agent</option>
        <option value="dj">DJ Agent</option>
        <option value="venue">Venue Agent</option>
      </select>

      <h3>{agent.toUpperCase()} Agent</h3>
      <p>Event-wise vendor recommendation, local rate comparison, and availability checking.</p>
    </div>
  );
}

function BudgetPrediction() {
  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>AI Budget Prediction</h2>
      <p>Predict event cost using event type, city, guests, season, and vendor rates.</p>
    </div>
  );
}

function InvoiceGenerator() {
  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Invoice Generator</h2>
      <p>Generate final event bill with vendor-wise costing.</p>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{ background: "white", padding: "20px", borderRadius: "12px" }}>
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default App;