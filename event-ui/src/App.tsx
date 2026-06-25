import { useState } from "react";
import LoginPage from "./components/LoginPage";
import QuotationComparison from "./components/QuotationComparison";
import NegotiationAI from "./components/NegotiationAI";
import BookingHistory from "./components/BookingHistory";
import AdminPanel from "./components/AdminPanel";
import AIChatAssistant from "./components/AIChatAssistant";
import RAGKnowledgeBase from "./components/RAGKnowledgeBase";

type EventBooking = {
  eventType: string;
  city: string;
  area: string;
  guests: number;
  budget: number;
  catering: number;
  decoration: number;
  photography: number;
  dj: number;
  total: number;
  status: string;
};

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [activeTab, setActiveTab] = useState("dashboard");

  const [bookings, setBookings] = useState<EventBooking[]>(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  const latestBooking = bookings[bookings.length - 1];

  const saveBooking = (booking: EventBooking) => {
    const updatedBookings = [...bookings, booking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    setActiveTab("invoice");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
      <aside
        style={{
          width: "280px",
          background: "#0f172a",
          color: "white",
          padding: "24px",
        }}
      >
        <h2>🚀 GenAI Planner</h2>
        <p style={{ color: "#94a3b8" }}>Premium Event OS</p>

        {[
          ["dashboard", "Dashboard"],
          ["book", "Book Event"],
          ["predict", "AI Budget Prediction"],
          ["vendors", "Vendor Planner"],
          ["quotation", "Quotation AI"],
          ["negotiation", "Negotiation AI"],
          ["agents", "Agents"],
          ["invoice", "Invoice / Print"],
          ["history", "Booking History"],
          ["analytics", "Analytics"],
          ["chat", "AI Chat"],
          ["rag", "RAG Knowledge"],
          ["admin", "Admin Panel"],
        ].map(([key, label]) => (
          <div
            key={key}
            onClick={() => setActiveTab(key)}
            style={{
              padding: "13px",
              marginTop: "10px",
              borderRadius: "10px",
              cursor: "pointer",
              background: activeTab === key ? "#2563eb" : "transparent",
            }}
          >
            {label}
          </div>
        ))}

        <button
          style={{
            width: "100%",
            marginTop: "30px",
            background: "#dc2626",
          }}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          Logout
        </button>
      </aside>

      <main style={{ flex: 1, padding: "30px", background: "#f8fafc" }}>
        <Hero />

        {activeTab === "dashboard" && (
          <Dashboard bookings={bookings} latestBooking={latestBooking} />
        )}

        {activeTab === "book" && <EventBookingForm onBook={saveBooking} />}

        {activeTab === "predict" && <BudgetPredictor />}

        {activeTab === "vendors" && <VendorPlanner />}

        {activeTab === "quotation" && <QuotationComparison />}

        {activeTab === "negotiation" && <NegotiationAI />}

        {activeTab === "agents" && <AgentWorkspace />}

        {activeTab === "invoice" && (
          <InvoicePrint booking={latestBooking} bookings={bookings} />
        )}

        {activeTab === "history" && <BookingHistory bookings={bookings} />}

        {activeTab === "analytics" && <Analytics bookings={bookings} />}

        {activeTab === "chat" && <AIChatAssistant />}

        {activeTab === "rag" && <RAGKnowledgeBase />}

        {activeTab === "admin" && <AdminPanel />}
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white",
        padding: "32px",
        borderRadius: "24px",
        marginBottom: "24px",
      }}
    >
      <p>AI + ML + Multi-Agent Event Planning</p>
      <h1>GenAI Smart Event Planner</h1>
      <p>
        Book events, predict budget, plan vendors, manage agents and print
        invoice.
      </p>
    </section>
  );
}

function Dashboard({
  bookings,
  latestBooking,
}: {
  bookings: EventBooking[];
  latestBooking?: EventBooking;
}) {
  const revenue = bookings.reduce((sum, b) => sum + b.total, 0);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        <Card title="Total Bookings" value={String(bookings.length)} />
        <Card title="Revenue" value={`₹${revenue.toLocaleString()}`} />
        <Card title="AI Plans" value={String(bookings.length)} />
        <Card
          title="Status"
          value={latestBooking ? latestBooking.status : "Ready"}
        />
      </div>

      <div className="card" style={{ marginTop: "24px" }}>
        <h2>Dashboard Working ✅</h2>
        <p>
          Event booking, prediction, vendor planning, quotation AI, negotiation
          AI, admin panel, AI chat, RAG and invoice print modules are active.
        </p>
      </div>
    </>
  );
}

function EventBookingForm({
  onBook,
}: {
  onBook: (booking: EventBooking) => void;
}) {
  const cityAreas: Record<string, string[]> = {
    Nagpur: ["Dharampeth", "Sitabuldi", "Manish Nagar", "Wardha Road"],
    Pune: ["Hinjewadi", "Baner", "Kothrud", "Wakad"],
    Mumbai: ["Andheri", "Bandra", "Dadar", "Powai"],
  };

  const [eventType, setEventType] = useState("Wedding");
  const [city, setCity] = useState("Nagpur");
  const [area, setArea] = useState("Dharampeth");
  const [guests, setGuests] = useState(300);
  const [budget, setBudget] = useState(500000);

  const rateMap: Record<string, number> = {
    Wedding: 1200,
    Birthday: 500,
    Corporate: 1500,
    Engagement: 900,
  };

  const predicted = guests * rateMap[eventType];

  const catering = Math.round(predicted * 0.45);
  const decoration = Math.round(predicted * 0.25);
  const photography = Math.round(predicted * 0.18);
  const dj = Math.round(predicted * 0.12);
  const total = catering + decoration + photography + dj;

  const status = total <= budget ? "Within Budget" : "Over Budget";

  const bookEvent = () => {
    onBook({
      eventType,
      city,
      area,
      guests,
      budget,
      catering,
      decoration,
      photography,
      dj,
      total,
      status,
    });
  };

  return (
    <div className="card">
      <h2>Book Event</h2>

      <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Corporate</option>
        <option>Engagement</option>
      </select>

      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          setArea(cityAreas[e.target.value][0]);
        }}
      >
        {Object.keys(cityAreas).map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select value={area} onChange={(e) => setArea(e.target.value)}>
        {cityAreas[city].map((a) => (
          <option key={a}>{a}</option>
        ))}
      </select>

      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />

      <h3>AI Predicted Cost: ₹{total.toLocaleString()}</h3>
      <p>Status: {status}</p>

      <button onClick={bookEvent}>Book Event & Generate Invoice</button>
    </div>
  );
}

function BudgetPredictor() {
  const [guests, setGuests] = useState(300);
  const [eventType, setEventType] = useState("Wedding");

  const rates: Record<string, number> = {
    Wedding: 1200,
    Birthday: 500,
    Corporate: 1500,
    Engagement: 900,
  };

  const prediction = guests * rates[eventType];

  return (
    <div className="card">
      <h2>AI Budget Prediction</h2>

      <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
        <option>Wedding</option>
        <option>Birthday</option>
        <option>Corporate</option>
        <option>Engagement</option>
      </select>

      <input
        type="number"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <h3>Predicted Budget: ₹{prediction.toLocaleString()}</h3>
      <p>ML logic uses event type, local rate and guest count.</p>
    </div>
  );
}

function VendorPlanner() {
  const vendors = [
    { service: "Catering", vendor: "Shree Caterers", price: 250000, rating: 4.6 },
    { service: "Decoration", vendor: "Royal Decor", price: 120000, rating: 4.5 },
    { service: "Photography", vendor: "Pixel Studio", price: 70000, rating: 4.4 },
    { service: "DJ", vendor: "DJ Beats", price: 40000, rating: 4.2 },
  ];

  return (
    <div className="card">
      <h2>Vendor Planner</h2>

      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Service</th>
            <th>Vendor</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {vendors.map((v) => (
            <tr key={v.vendor}>
              <td>{v.service}</td>
              <td>{v.vendor}</td>
              <td>₹{v.price.toLocaleString()}</td>
              <td>{v.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AgentWorkspace() {
  const [agent, setAgent] = useState("Catering Agent");

  return (
    <div className="card">
      <h2>Department Agents</h2>

      <select value={agent} onChange={(e) => setAgent(e.target.value)}>
        <option>Catering Agent</option>
        <option>Decorator Agent</option>
        <option>Photographer Agent</option>
        <option>DJ Agent</option>
        <option>Venue Agent</option>
        <option>Billing Agent</option>
      </select>

      <h3>{agent}</h3>

      <p>
        This agent recommends local vendors, compares rates, checks budget and
        prepares event-wise planning.
      </p>
    </div>
  );
}

function InvoicePrint({
  booking,
  bookings,
}: {
  booking?: EventBooking;
  bookings: EventBooking[];
}) {
  if (!booking) {
    return (
      <div className="card">
        <h2>No Invoice Yet</h2>
        <p>Please book an event first.</p>
      </div>
    );
  }

  return (
    <div className="card" id="invoice">
      <h2>Final Invoice</h2>

      <p>Event: {booking.eventType}</p>
      <p>
        Location: {booking.city}, {booking.area}
      </p>
      <p>Guests: {booking.guests}</p>
      <p>Budget: ₹{booking.budget.toLocaleString()}</p>

      <table width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>Service</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Catering</td>
            <td>₹{booking.catering.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Decoration</td>
            <td>₹{booking.decoration.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Photography</td>
            <td>₹{booking.photography.toLocaleString()}</td>
          </tr>
          <tr>
            <td>DJ</td>
            <td>₹{booking.dj.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <h2>Total: ₹{booking.total.toLocaleString()}</h2>
      <h3>Status: {booking.status}</h3>
      <p>Total Bookings Stored: {bookings.length}</p>

      <button onClick={() => window.print()}>Print Invoice</button>
    </div>
  );
}

function Analytics({ bookings }: { bookings: EventBooking[] }) {
  return (
    <div className="card">
      <h2>Analytics</h2>
      <p>Total bookings: {bookings.length}</p>
      <p>
        Total revenue: ₹
        {bookings.reduce((sum, b) => sum + b.total, 0).toLocaleString()}
      </p>
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <h2>{value}</h2>
    </div>
  );
}

export default App;