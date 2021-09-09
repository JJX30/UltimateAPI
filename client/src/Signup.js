import React, { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [confirm, setConfirm] = useState("");

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <div className="body">
        <h1>Get started for free!</h1>
        <p>and recieve your API key</p>
        <form onSubmit={handleSubmit}>
          <div className="signup-inputs">
            <input
              type="email"
              placeholder="email"
              className="signup-input"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              className="signup-input"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="signup-input"
              name="confirm"
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
            />
          </div>
          <div className="signup-button">
            <button>create account</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  .body {
    width: 430px;
    height: 417px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 29px;
    margin-top: 10px;
  }
  h1 {
    font-family: Roboto, sans-serif;
    font-size: 48px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0;
  }
  .signup-inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 387px;
    height: 176px;
  }

  input::placeholder {
    font-size: 18px;
  }

  .signup-input {
    font-size: 18px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
    width: 387px;
    height: 46px;
    border-radius: 50px;
    border-color: black;
    border-width: 1px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 387px;
    height: 285px;
  }
  button {
    width: 269px;
    height: 70px;
    border-radius: 50px;
    border-style: none;
    color: white;
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
  }
  .signup-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
