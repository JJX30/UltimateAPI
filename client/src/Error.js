import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiErrorWarningLine } from "react-icons/ri";

const Error = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <div className="error-text">
          <h1 className="header">404 not found</h1>
          <p className="message">
            Lost? Get back on <Link to="/">track</Link>
          </p>
        </div>
        <div className="icon">
          <RiErrorWarningLine size={100}></RiErrorWarningLine>
        </div>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  .error-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: Roboto, sans-serif;
  }

  .error-text {
    display: flex;
    flex-direction: row;
  }
  .header {
    font-size: 72px;
    margin: 0px;
    font-weight: 500;
  }
  .message {
    font-size: 24px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 300;
  }
`;
