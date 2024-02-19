import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/signup.css";
import { toast } from "react-toastify";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SERVER = import.meta.env.VITE_SERVER;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post(`${SERVER}/users/`, userData);

      if (response.status === 201) {
        toast.success("Successfully registered! Welcome");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Registration failed");
    }
  };

  return (
    <div className="signup container mx-auto max-w-md rounded-xl shadow-xl shadow-gray-500">
      <div className="p-4">
        <h2 className="title text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="username mb-4">
            <p className="block mb-2">Username:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inputtext border rounded w-full p-2"
              required
            />
          </div>
          <div className="username mb-4">
            <p className="block mb-2">Email:</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputtext border rounded w-full p-2"
              required
            />
          </div>
          <div className="username mb-4">
            <p className="block mb-2">Password</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="inputtext border rounded w-full p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="submitb bg-blue-500 text-white rounded p-2 mt-2"
          >
            Register
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="log text-blue-500 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );

  //   const [user, setUser] = useState({});
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });

  //   const handleChange = (e) => {

  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setUser(formData);
  //   };

  //   return (
  //     <>
  //       <h2>Please Sign Up</h2>
  //       <form action="" onSubmit={handleSubmit}>
  //         <label htmlFor="name">Username</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={formData.name}
  //           onChange={handleChange}
  //         />
  //         <label htmlFor="email">Email</label>
  //         <input
  //           type="text"
  //           id="email"
  //           name="email"
  //           value={formData.email}
  //           onChange={handleChange}
  //         />
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="text"
  //           id="password"
  //           name="password"
  //           value={formData.password}
  //           onChange={handleChange}
  //         />
  //         <button type="submit">Login</button>
  //       </form>
  //     </>
  //   );
};

export default SignupForm;
