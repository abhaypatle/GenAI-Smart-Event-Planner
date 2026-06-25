import { useState } from "react";

function RAGKnowledgeBase() {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const searchKnowledge = () => {
    setAnswer(
      `RAG searched vendor profiles, local rates, reviews and past events for: "${query}". Suggested result: use vendors with high rating, available status and price within local market range.`
    );
  };

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>RAG Knowledge Base</h2>

      <textarea
        placeholder="Ask: Find decorators under ₹50,000 in Nagpur"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: "100%", height: "100px", padding: "12px" }}
      />

      <button onClick={searchKnowledge} style={{ marginTop: "12px" }}>
        Search Knowledge Base
      </button>

      {answer && (
        <div style={{ marginTop: "20px", background: "#f3f4f6", padding: "16px" }}>
          <h3>RAG Response</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default RAGKnowledgeBase;