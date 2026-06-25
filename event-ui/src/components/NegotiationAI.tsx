import { useState } from "react";

function NegotiationAI() {
  const [vendorName, setVendorName] = useState("Royal Decor");
  const [quotedPrice, setQuotedPrice] = useState(70000);
  const [marketPrice, setMarketPrice] = useState(55000);

  const saving = quotedPrice - marketPrice;

  const message = `Hello ${vendorName}, your quotation is ₹${quotedPrice.toLocaleString()}. Based on local market rates, similar vendors are offering around ₹${marketPrice.toLocaleString()}. Can you revise the quotation closer to ₹${marketPrice.toLocaleString()}? This can help us confirm the booking quickly.`;

  return (
    <div style={{ background: "white", padding: "24px", borderRadius: "12px" }}>
      <h2>Negotiation AI</h2>

      <input value={vendorName} onChange={(e) => setVendorName(e.target.value)} />
      <input type="number" value={quotedPrice} onChange={(e) => setQuotedPrice(Number(e.target.value))} />
      <input type="number" value={marketPrice} onChange={(e) => setMarketPrice(Number(e.target.value))} />

      <h3>Expected Saving: ₹{saving.toLocaleString()}</h3>

      <h3>AI Message</h3>
      <p>{message}</p>
    </div>
  );
}

export default NegotiationAI;