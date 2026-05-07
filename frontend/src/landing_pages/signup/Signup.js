import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [isLogin, setIsLogin] = useState(false);

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (isLogin) {

        const res = await axios.post(
          "http://localhost:3002/login",
          {
            email: user.email,
            password: user.password,
          }
        );

        localStorage.setItem("token", res.data.token);

        alert("Login Successful");

        window.location.href = "http://localhost:3000";

      } else {

        const res = await axios.post(
          "http://localhost:3002/signup",
          user
        );

       alert("Signup Successful");

       window.location.href = "http://localhost:3000";
      }

    } catch (error) {

      alert(error.response.data.message);

    }
  };

  return (

    <div className="container mt-5" style={{maxWidth:"500px"}}>

      <h2 className="mb-4 text-center">
        {isLogin ? "Login" : "Signup"}
      </h2>

      <form onSubmit={handleSubmit}>

        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="form-control mb-3"
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100">
          {isLogin ? "Login" : "Signup"}
        </button>

      </form>

      <p
        className="mt-3 text-center"
        style={{cursor:"pointer"}}
        onClick={() => setIsLogin(!isLogin)}
      >
        {
          isLogin
          ? "Create new account"
          : "Already have an account?"
        }
      </p>

    </div>
  );
}

export default Signup;