import "../styles/donate.css";
import React from "react";

const Donate = ({ setDonate }) => {
  return (
    <div className="donate-popup">
      <input type="number" defaultValue={10} />
      <button>Donate</button>
      <img src="/assets/close_FILL0_wght400_GRAD0_opsz24.svg" alt="close button" onClick={() => setDonate(false)} />
    </div>
  );
};

export default Donate;
