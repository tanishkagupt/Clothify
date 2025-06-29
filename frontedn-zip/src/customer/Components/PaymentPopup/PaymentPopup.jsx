// PaymentPopup.jsx
import React, { useState } from "react";
import "./PaymentPopup.css";

const PaymentPopup = ({ open, onClose, onSuccess }) => {
  const [utr, setUtr] = useState("");
  const [paymentOption, setPaymentOption] = useState("qr");

  const handleSubmit = () => {
    if (paymentOption === "qr" && !utr) {
      alert("Please enter UTR number.");
      return;
    }

    // You can add API call or Redux dispatch here
    console.log("Payment Method:", paymentOption);
    console.log("UTR No:", utr);

    onClose();     // Close current popup
    onSuccess();   // Show success popup
  };

  if (!open) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Payment Details</h2>

        <div className="payment-option">
          <label>
            <input
              type="radio"
              value="qr"
              checked={paymentOption === "qr"}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
            QR Payment
          </label>
          <label>
            <input
              type="radio"
              value="cod"
              checked={paymentOption === "cod"}
              onChange={(e) => setPaymentOption(e.target.value)}
            />
            Cash on Delivery
          </label>
        </div>

        {paymentOption === "qr" && (
          <>
            <div className="qr-container">
              <img
                src="/images/your-qr-code.png"
                alt="QR Code"
                className="qr-image"
              />
              <p>Scan & Pay using UPI</p>
            </div>
            <input
              className="utr-input"
              type="text"
              placeholder="Enter UTR Number"
              value={utr}
              onChange={(e) => setUtr(e.target.value)}
            />
          </>
        )}

        <div className="popup-actions">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="close-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPopup;
