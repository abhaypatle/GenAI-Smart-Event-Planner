
import { Bell, Search, User } from "lucide-react";

function TopHeader() {
  return (
    <div
      style={{
        background: "white",
        padding: "16px 24px",
        borderRadius: "16px",
        marginBottom: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 6px 18px rgba(15,23,42,0.08)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Search size={18} />
        <input placeholder="Search events, vendors..." />
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Bell />
        <User />
      </div>
    </div>
  );
}

export default TopHeader;