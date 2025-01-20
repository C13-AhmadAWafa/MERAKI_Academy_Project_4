import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="number" placeholder="phoneNumber" />
        <input type="text" placeholder="country" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
