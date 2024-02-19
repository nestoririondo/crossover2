import React from "react";
import accountIcon from "../assets/account_circle_FILL0_wght400_GRAD0_opsz24.png";

const Donation = () => {
  return (
    <li className="donation">
      <img src={accountIcon} alt="account icon" />
      <div>
        <p>Ken Kindermann</p>
        <p>25€</p>
      </div>
    </li>
  );
};

export default Donation;
