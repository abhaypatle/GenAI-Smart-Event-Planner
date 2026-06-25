import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 120000 },
  { month: "Feb", revenue: 180000 },
  { month: "Mar", revenue: 240000 },
  { month: "Apr", revenue: 320000 },
  { month: "May", revenue: 410000 },
];

const eventData = [
  { name: "Wedding", value: 45 },
  { name: "Birthday", value: 25 },
  { name: "Corporate", value: 18 },
  { name: "Engagement", value: 12 },
];

const COLORS = [
  "#2563eb",
  "#7c3aed",
  "#10b981",
  "#f59e0b",
];

function AnalyticsDashboard() {
  return (
    <div>
      <h2>Analytics Dashboard</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Revenue Growth</h3>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
          }}
        >
          <h3>Event Distribution</h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eventData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {eventData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsDashboard;