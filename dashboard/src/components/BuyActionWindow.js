// src/components/BuyActionWindow.js

import React from "react";
import "./BuyActionWindow.css"; // Optional: if you want custom styles

const BuyActionWindow = ({ uid }) => {
  const handleBuy = () => {
    alert(`Buying stock with UID: ${uid}`);
    // In real app: trigger order API or update context/state
  };

  return (
    <div className="buy-window shadow p-3 rounded bg-light border">
      <h5>Buy Stock</h5>
      <p><strong>Stock UID:</strong> {uid}</p>
      <input type="number" placeholder="Quantity" className="form-control mb-2" />
      <button className="btn btn-success" onClick={handleBuy}>Buy</button>
    </div>
  );
};

export default BuyActionWindow;
