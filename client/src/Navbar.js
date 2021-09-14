import React from "react";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="navbar-search">
        <Link className="navbar-link navbar-logo" to="/">
          <GiBoxingGloveSurprise
            size={70}
            color="#DB0000"
          ></GiBoxingGloveSurprise>
        </Link>
        <input type="text" placeholder="    search the documentation..." />
      </div>
      <div className="navbar-links">
        <Link className="navbar-link navbar-doc" to="/doc">
          doc
        </Link>
        <Link to="/signin">
          <button className="navbar-link">sign in</button>
        </Link>
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
    justify-content: space-around;
    align-items: center;
    width: 250px;
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
    cursor: pointer;
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
