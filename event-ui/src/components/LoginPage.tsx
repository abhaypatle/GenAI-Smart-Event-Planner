import { useState } from "react";

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin123");

  const login = () => {
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg,#2563eb,#7c3aed)",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "white",
          padding: "40px",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <h1>GenAI Planner Login</h1>
        <p>Login to continue</p>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%" }}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%" }}
        />

        <button onClick={login} style={{ width: "100%" }}>
          Login
        </button>

        <p>Demo: admin@gmail.com / admin123</p>
      </div>
    </div>
  );
}

export default LoginPage;