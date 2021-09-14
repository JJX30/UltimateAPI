import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Signup = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [confirm, setConfirm] = useState("");
  const errorMessage = useRef(null);
  const history = useHistory();

  const handleChange = (e) => {
    errorMessage.current.hidden = true;
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email && user.password && confirm) {
      if (user.password !== confirm) {
        setUser({ email: user.email, password: "" });
        setConfirm("");
        console.log("Signup error");
        errorMessage.current.innerHTML = "Passwords do not match";
        errorMessage.current.hidden = false;
      } else {
        const newUser = { email: user.email, password: user.password };
        const url = "/api/signup";

        const options = {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(newUser),
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          if (result.status === 404) {
            setUser({ email: user.email, password: "" });
            setConfirm("");
            console.log("Signup error");
            errorMessage.current.innerHTML = "Email already in use";
            errorMessage.current.hidden = false;
          } else if (result.status === 200) {
            alert("Account Succesfully created!");
            console.log("Account created");
            console.log("route to login page");
            history.push("/signin");
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      setUser({ email: "", password: "" });
      setConfirm("");
      errorMessage.current.hidden = false;
    }
  };

  return (
    <Wrapper>
      <div className="body">
        <h1>Get started for free!</h1>
        <p className="subtitle">and recieve your API key</p>
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
            <button type="submit">create account</button>
            <p hidden ref={errorMessage}>
              Please enter an email and password
            </p>
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
    color: red;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
  }
  .subtitle {
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
    cursor: pointer;
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
    flex-direction: column;
  }
`;
