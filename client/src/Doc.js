import React from "react";
import styled from "styled-components";
import DocNavbar from "./DocNavbar";
import DocFooter from "./DocFooter";
import { Link } from "react-router-dom";
import { BsLink } from "react-icons/bs";
import { GrDown } from "react-icons/gr";

const Doc = () => {
  return (
    <Wrapper>
      <DocNavbar></DocNavbar>
      <div className="doc-bar">
        <div className="doc-nav-container">
          <nav className="doc-nav">
            <ul className="doc-nav-list">
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">🔎GETTING STARTED </Link>
                <div className="arrow-icon">
                  <GrDown></GrDown>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">🪜STRUCTURE</Link>
                <div className="arrow-icon">
                  <GrDown></GrDown>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">❓QUERIES</Link>
                <div className="arrow-icon">
                  <GrDown></GrDown>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">📝FAQ</Link>
                <div className="arrow-icon">
                  <GrDown></GrDown>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">🎉THANK YOU</Link>
              </div>
            </ul>
          </nav>
          <div className="doc-divider"></div>
        </div>
        <div className="doc-documentation">
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h1">🔎 Getting started</p>
            <p className="doc-documentation-subtitle">
              This page is an overview on how to use the UltimateAPI API with
              correct queries
            </p>
            <p className="doc-documentation-p">
              <b>UltimateAPI</b> is an API for UFC fighters, (and more MMA
              promotions soon) we will continue to update the data to reflect
              current events as well.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <div className="doc-documentation-h2">The Key</div>
          </div>
        </div>
      </div>
      <DocFooter></DocFooter>
    </Wrapper>
  );
};

export default Doc;

const Wrapper = styled.div`
  .arrow-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 2px;
  }
  .doc-documentation-divider {
    height: 1px;
    width: 1000px;
    margin-left: 20px;
    margin-top: 60px;
    background-color: #c8c9cc;
  }
  .doc-documentation {
    padding-left: 350px;
    padding-top: 50px;
    padding-bottom: 70px;
    margin-top: 80px;
    padding-right: 80px;
    font-family: Roboto, sans-serif;
  }

  .doc-documentation-h2 {
    font-size: 45px;
    margin-top: 60px;
    margin-left: 20px;
  }
  .doc-documentation-h1 {
    font-size: 70px;
    margin-top: 20px;
    margin-left: 20px;
  }
  .doc-documentation-subtitle {
    font-size: 25px;
    font-weight: 300;
    margin-left: 20px;
    margin-top: 30px;
    color: rgba(0, 0, 0, 0.6);
  }
  .doc-documentation-p {
    font-size: 17px;
    margin-top: 50px;
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.7;
  }
  .doc-bar {
    display: flex;
    flex-direction: row;
  }
  .doc-nav-container {
    display: flex;
    padding-left: 60px;
    background-color: #f7f7f7;
    position: fixed;
    height: 796px;
  }
  .doc-nav-list {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
  }
  .doc-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .doc-nav-link-container {
    margin: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .doc-nav-links {
    font-family: "Work Sans", sans-serif;
    font-size: 17px;
    font-weight: 300;
    color: #262626;
    text-decoration: none;
  }
  .doc-divider {
    width: 2px;
    background-color: #ebebeb;
  }
`;
