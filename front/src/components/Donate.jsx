import "../styles/donate.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/useAuth";

const SERVER = import.meta.env.VITE_SERVER;

const Donate = ({ setDonate, project_id, getProject }) => {
  const { user } = useAuth();
  const [amount, setAmount] = useState(100);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = async (e) => {
    if (!user) {
      alert("Please login to donate");
      return;
    }
    const donation = {
      amount: amount,
      project_id: project_id,
      user_id: user._id,
    };
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER}/projects/donate`, donation);
      console.log(response);
      getProject();
    } catch (error) {
      console.error(error);
    } finally {
      setDonate(false);
    }
  };

  return (
    <div className="donate-popup">
      <form onSubmit={handleSubmit}>
        <input type="number" value={amount} onChange={handleChange} />
        <button type="submit">Donate</button>
      </form>
      <img
        src="/assets/close_FILL0_wght400_GRAD0_opsz24.svg"
        alt="close button"
        onClick={() => setDonate(false)}
      />
    </div>
  );
};

export default Donate;
