import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Doc = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <div className="doc-bar">
        <div className="doc-nav-container">
          <nav className="doc-nav">
            <ul className="doc-nav-list">
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">GETTING STARTED</Link>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">STRUCTURE</Link>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">QUERIES</Link>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">FAQ</Link>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">THANK YOU</Link>
              </div>
            </ul>
          </nav>
          <div className="doc-divider"></div>
        </div>
        <div className="doc-documentation">
          <h1>Getting started</h1>
          <p>IDk what to say</p>
        </div>
      </div>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Doc;

const Wrapper = styled.div`
  .doc-documentation {
  }
  .doc-bar {
    display: flex;
    flex-direction: row;
  }
  .doc-nav-container {
    display: flex;
    padding-left: 100px;
    background-color: #f7f7f7;
  }
  .doc-nav-list {
    display: flex;
    flex-direction: column;
  }
  .doc-nav-link-container {
    margin: 10px;
  }
  .doc-nav-links {
    font-family: "Work Sans", sans-serif;
    font-size: 20px;
    font-weight: 300;
    color: #6d6d6d;
    text-decoration: none;
  }
  .doc-divider {
    height: 500px;
    width: 2px;
    background-color: #9c9a9b;
  }
`;
