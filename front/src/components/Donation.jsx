import React from "react";

const Donation = ({ details }) => {
  console.log(details)
  return (
    <li className="donation">
      <img src="/assets/paid_FILL0_wght400_GRAD0_opsz24.svg" alt="account icon" />
      <div>
        <p className="donator">{details.user.name}</p>
        <p>{details.amount}€</p>
      </div>
    </li>
  );
};

export default Donation;
