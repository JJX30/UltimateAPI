import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <h1 className="header">404</h1>
        <p className="message">
          You need to be signed in to access this page...
        </p>
        <button className="back-button">back</button>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.div`
  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: Roboto, sans-serif;
  }
`;
