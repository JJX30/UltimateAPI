import React from "react";
import styled from "styled-components";
import DocNavbar from "./DocNavbar";
import DocFooter from "./DocFooter";
import { Link } from "react-router-dom";
// import { BsLink } from "react-icons/bs";
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
              This page is an overview on how to get started using Ultimate API,
              by the end you'll make your first request
            </p>
            <p className="doc-documentation-p">
              <b>UltimateAPI</b> is an API for UFC fighters, (and more MMA
              promotions soon) we will continue to update the data to reflect
              current events as well.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-list">
            <ul className="list">
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Try UltimateAPI</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Generate the key</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Your first request</u>
                  </mark>
                </Link>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🥊 Try UltimateAPI</p>
            <p className="doc-documentation-p">
              Whether you’re making an app, making your own API, or just an MMA
              fan that happens to code, UltimateAPI is here to provide you with
              the best UFC data at the fastest speeds. <br></br> <br></br>
              If you are making an app, consider letting us know by reaching
              out! We’re excited to see what people will create with our
              product.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🔑 Generate the key</p>
            <p className="doc-documentation-p">
              First things first you’ll need to do is generate an API key. This
              can be done in your profile tab, hit the edit button and then hit
              generate. Copy that key into your clipboard. You can generate as
              many times as you want!<br></br>
              <br></br>
              You’ll need that key to gain access to the API.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🥇 Your first request</p>
            <p className="doc-documentation-p">
              Now that you have the key on your clipboard, you’re ready to make
              your first request to UltimateAPI. <br></br>
              <br></br>It's pretty simple,
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/612a58314d73f352602c2ad5
                </p>
              </div>
              Place your key within this link and navigate to the url. You
              should get a page that returns some JSON data from a fighter in
              our database.<br></br>
              <br></br>
              Congratulations you just made your first request to UltimateAPI,
              pretty cool huh?
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h1">🪜 Structure</p>
            <p className="doc-documentation-subtitle">
              Overview of the structured data we provide for the fighters
            </p>
            <p className="doc-documentation-p">
              The response data is organized in JSON format. Sent through is
              multiple properties respective to the fighter.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-list">
            <ul className="list">
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>ID</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Name</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Attributes</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Record</u>
                  </mark>
                </Link>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🎫 ID</p>
            <p className="doc-documentation-p">
              Each fighter has a unique ID property given to them, it's a series
              of random characters.
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  <span className="name">_id: </span>
                  <span className="name-content">
                    "612a58314d73f352602c2702"
                  </span>
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> ✒️ Name</p>
            <p className="doc-documentation-p">
              Each fighter has a name property for their first name, last name,
              and nickname. Many fighters share names, so the queries account
              for that.
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  <span className="name">firstname: </span>
                  <span className="name-content">"Tony"</span>, <br></br>
                  <span className="name">lastname: </span>
                  <span className="name-content">"Ferguson"</span>, <br></br>
                  <span className="name">nickname: </span>
                  <span className="name-content">"El Cucuy"</span>
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 📏 Attributes</p>
            <p className="doc-documentation-p">
              Each fighter has attribute properties for their weight, height,
              reach, and stance. <br></br>
              Stance property can be Orthodox, Southpaw, or Switch.
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  <span className="name">height: </span>
                  <span className="name-content">"5' 11"</span>, <br></br>
                  <span className="name">weight: </span>
                  <span className="name-content">"155 lbs."</span>, <br></br>
                  <span className="name">reach: </span>
                  <span className="name-content">"76"</span>, <br></br>
                  <span className="name">stance: </span>
                  <span className="name-content">"Orthodox"</span>
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🏆 Record</p>
            <p className="doc-documentation-p">
              Finally each fighter has record properties for counting their
              achievements... <br></br>
              <br></br>
              Who is the best!
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  <span className="name">wins: </span>
                  <span className="record-content">26</span>, <br></br>
                  <span className="name">losses: </span>
                  <span className="record-content">6</span>, <br></br>
                  <span className="name">draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name">belt: </span>
                  <span className="belt-content">false</span>
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h1">❓ Queries</p>
            <p className="doc-documentation-subtitle">
              Overview of the queries that can be made to request data from
              UltimateAPI
            </p>
            <p className="doc-documentation-p">
              We will be adding more queries and improving them as well.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🏆 Record</p>
            <p className="doc-documentation-p">
              Finally each fighter has record properties for counting their
              achievements... <br></br>
              <br></br>
              Who is the best!
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  <span className="name">wins: </span>
                  <span className="record-content">26</span>, <br></br>
                  <span className="name">losses: </span>
                  <span className="record-content">6</span>, <br></br>
                  <span className="name">draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name">belt: </span>
                  <span className="belt-content">false</span>
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
      <DocFooter></DocFooter>
    </Wrapper>
  );
};

export default Doc;

const Wrapper = styled.div`
  .record-content {
    color: #1100c9;
  }
  .belt-content {
    color: #4f0094;
  }
  .name-content {
    color: #378f00;
  }
  .doc-documentation-heading {
    margin-top: 80px;
  }
  .doc-documentation-list {
    margin-top: 60px;
    margin-left: 40px;
  }
  .list-item {
    margin: 35px;
  }
  .highlight {
    background-color: rgba(219, 0, 0, 0.6);
    color: white;
  }
  .doc-documentation-code-box {
    border-style: solid;
    border-color: #c8c9cc;
    border-radius: 10px;
    background-color: whitesmoke;
    padding: 13px;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .doc-documentation-code {
    font-family: "Courier New", Courier, monospace;
  }
  .arrow-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 2px;
  }
  .doc-documentation-divider {
    height: 1px;
    margin-left: 20px;
    margin-top: 60px;
    background-color: #c8c9cc;
  }
  .doc-documentation {
    padding-left: 400px;
    padding-bottom: 70px;
    margin-top: 80px;
    padding-right: 100px;
    font-family: Roboto, sans-serif;
  }

  .doc-documentation-h2 {
    font-size: 45px;
    margin-top: 60px;
    margin-left: 20px;
  }
  .doc-documentation-h1 {
    font-size: 90px;
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
