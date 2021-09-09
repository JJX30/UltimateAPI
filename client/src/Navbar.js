import React from "react";
import { GiBoxingGloveSurprise } from "react-icons/gi";

import styled from "styled-components";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar-search">
        <a className="navbar-link navbar-logo" href="/">
          <GiBoxingGloveSurprise
            size={70}
            color="#DB0000"
          ></GiBoxingGloveSurprise>
        </a>
        <input type="text" placeholder="    search the documentation..." />
      </div>
      <div className="navbar-links">
        <a className="navbar-link navbar-about" href="#about">
          about
        </a>
        <a className="navbar-link navbar-doc" href="/doc">
          doc
        </a>
        <button className="navbar-link">sign in</button>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: black;
  height: 78px;

  li {
    list-style-type: none;
  }
  input {
    width: 533px;
    height: 42px;
    border-radius: 50px;
    border-style: none;
  }
  input::placeholder {
    font-size: 18px;
  }
  .navbar-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 357px;
    margin-right: 45px;
  }
  .navbar-link {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: white;
    text-decoration: none;
  }
  .navbar-search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 653px;
    margin-left: 31px;
  }
  .navbar-logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border-style: none;
    border-radius: 50px;
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
    width: 111px;
    height: 52px;
  }

  GiBoxingGlove {
    color: #db0000;
  }
`;
