import { useState } from "react";

function AIChatAssistant() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk = () => {
    if (!message.trim()) {
      setReply("Please enter your event requirement.");
      return;
    }

    setReply(
      `AI understood your request: "${message}". Suggested next step: generate event plan, vendor list, budget breakdown, and schedule.`
    );
  };

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>AI Chat Assistant</h2>

      <textarea
        placeholder="Example: Plan a wedding in Nagpur for 300 guests under 5 lakh"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "100%",
          height: "100px",
          padding: "12px",
          marginTop: "10px",
        }}
      />

      <button onClick={handleAsk} style={{ marginTop: "12px" }}>
        Ask AI
      </button>

      {reply && (
        <div style={{ marginTop: "20px", background: "#f3f4f6", padding: "16px" }}>
          <h3>AI Response</h3>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}

export default AIChatAssistant;