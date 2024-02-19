import React, { useState } from "react";

const LoginForm = () => {

    const [user, setUser] = useState({});

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setUser(formData);
    };

  return (
    <>
    <h2>Login</h2>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"  value={formData.email}
          onChange={handleChange}/>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password"  value={formData.password}
          onChange={handleChange}/>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
