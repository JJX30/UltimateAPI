import React from "react"
import styled from "styled-components"

const signup = () => {
  return (
    <Wrapper>
      <div className="body">
        <h1>Get started for free!</h1>
        <p>and recieve your API key</p>
        <form>
          <div className="signup-inputs">
            <input
              type="text"
              placeholder="    email"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="    password"
              className="signup-input"
            />
            <input
              type="password"
              placeholder="    confirm password"
              className="signup-input"
            />
          </div>
          <div className="signup-button">
            <button>create account</button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default signup

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
    background-color: #db0000;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
  }
  .signup-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
