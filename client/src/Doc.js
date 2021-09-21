import React from "react";
import styled from "styled-components";
import DocNavbar from "./DocNavbar";
import DocFooter from "./DocFooter";
import { Link } from "react-router-dom";
// import { BsLink } from "react-icons/bs";
import { GrDown } from "react-icons/gr";

const Doc = () => {
  const handleClick = () => {
    console.log("bruh");
  };
  return (
    <Wrapper>
      <DocNavbar></DocNavbar>
      <div className="doc-bar">
        <div className="doc-nav-container">
          <nav className="doc-nav">
            <ul className="doc-nav-list">
              <div className="doc-nav-link-container">
                <Link to="/doc/#getting-started" className="doc-nav-links">
                  🔎GETTING STARTED{" "}
                </Link>
                <button onClick={handleClick} className="arrow-icon">
                  <GrDown></GrDown>
                </button>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">🪜STRUCTURE</Link>
                <button onClick={handleClick} className="arrow-icon">
                  <GrDown></GrDown>
                </button>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">❓QUERIES</Link>
                <button onClick={handleClick} className="arrow-icon">
                  <GrDown></GrDown>
                </button>
              </div>
              <div className="doc-nav-link-container">
                <Link className="doc-nav-links">📝FAQ</Link>
                <button onClick={handleClick} className="arrow-icon">
                  <GrDown></GrDown>
                </button>
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
            <p className="doc-documentation-h2"> 📊 Stats</p>
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
          <div className="doc-documentation-list">
            <ul className="list">
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Find a fighter</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Find by attributes</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Find the ID</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Search with ID</u>
                  </mark>
                </Link>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🥷 Find a fighter</p>
            <p className="doc-documentation-p">
              The "/fighters" route takes a first name and last name query, you
              do not need both for the query to be valid. <br></br>
              <br></br> Query may return more than one value if fighters share a
              name.<br></br>
              <br></br>
              For example, a query like this: <br></br>
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters?
                  <mark className="highlight">firstname=conor</mark>
                </p>
              </div>
              would return list of conors:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  {"["}
                  <br></br> <span className="indent">{"{"}</span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58314d73f352602c282b"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Conor"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Heun"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">"Hurricane"</span>, <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"5' 10"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"155 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"76"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">9</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">5</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                  </span>
                  <span className="name indent"> {"{"} </span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58314d73f352602c282b"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Conor"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Heun"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">"Hurricane"</span>, <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"5' 10"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"155 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"76"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">9</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">5</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"} <br></br>
                  </span>
                  {"]"}
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🕵️ Find by attributes</p>
            <p className="doc-documentation-p">
              Queries for height, weight, stance, and record are all available
              and will return a list of fighters with those queries.{" "}
            </p>
            <p className="doc-documentation-h3">📏 Height</p>
            <p className="doc-documentation-p-sub">
              The "/height" route takes a height query and returns a list of
              fighters with that height. <br></br>
              <br></br>
              For example, a query like this:<br></br>
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/height?
                  <mark className="highlight">height=5' 11</mark>
                </p>
              </div>
              would return list of fighters with that height:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  {"["}
                  <br></br> <span className="indent">{"{"}</span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58314d73f352602c2702"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Tony"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Ferguson"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">"El Cucuy"</span>, <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"5' 11"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"155 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"76"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">26</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">6</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                  </span>
                  <span className="name indent"> {"{"} </span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58324d73f352602c2fdd"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Michael"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Trizano"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">"The Lone Wolf"</span>,{" "}
                  <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"5' 11"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"145 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"71"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">10</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">1</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                    <span className="name indent">
                      {"{ ... } //more items"}
                    </span>{" "}
                    <br></br>
                  </span>
                  {"]"}
                </p>
              </div>
            </p>
            <p className="doc-documentation-h3">⚖️ Weight</p>
            <p className="doc-documentation-p-sub">
              The "/weight" route takes a weight query and returns a list of
              fighters with that weight. <br></br>
              <br></br>
              For example, a query like this:<br></br>
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/weight?
                  <mark className="highlight">weight=155</mark>
                </p>
              </div>
              would return list of fighters with that weight.
            </p>
            <p className="doc-documentation-h3">🥋 Stance</p>
            <p className="doc-documentation-p-sub">
              The "/stance" route takes a stance query and returns a list of
              fighters with that stance. <br></br>
              <br></br>
              For example a query like this:<br></br>
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/stance?
                  <mark className="highlight">stance=switch</mark>
                </p>
              </div>
              would return list of fighters with that stance.
            </p>
            <p className="doc-documentation-h3">🏅 Record</p>
            <p className="doc-documentation-p-sub">
              The "/record" route takes a win, loss, or draw query and returns a
              list of fighters with those matching queries. <br></br>
              <br></br>
              For example, a query like this:<br></br>
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/record?
                  <mark className="highlight">wins=29</mark>
                </p>
              </div>
              would return:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  {"["}
                  <br></br> <span className="indent">{"{"}</span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58304d73f352602c232c"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Jose"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Aldo"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">""</span>, <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"5' 7"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"135 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"70"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">29</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">7</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                  </span>
                  <span className="name indent"> {"{"} </span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58304d73f352602c233d"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Eddie"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Alvarez"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">""</span>, <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"5' 9"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"155 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"69"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">29</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">6</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                    <span className="name indent">
                      {"{ ... } //more items"}
                    </span>{" "}
                    <br></br>
                  </span>
                  {"]"}
                </p>
              </div>
              <br></br>
              You could query individually wins, losses, or draws, but if you
              want you could combine them to find the exact record you're
              looking for. <br></br> <br></br>For example, a query like this:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/record?
                  <mark className="highlight">
                    {"wins=32&losses=14&draws=0"}
                  </mark>
                </p>
              </div>
              would return:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  {"["}
                  <br></br> <span className="indent">{"{"}</span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58304d73f352602c2548"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Carlos"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Condit"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">
                    "The Natural Born Killer"
                  </span>
                  , <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"6' 2"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"170 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"75"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Orthodox"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">32</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">14</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                  </span>
                  <span className="name indent"> {"{"} </span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58314d73f352602c2b0f"
                  </span>
                  , <br></br>
                  <span className="name indent2"> firstname: </span>
                  <span className="name-content">"Gerald"</span>, <br></br>
                  <span className="name indent2"> lastname: </span>
                  <span className="name-content">"Meerschaert"</span>, <br></br>
                  <span className="name indent2"> nickname: </span>
                  <span className="name-content">"GM3"</span>, <br></br>
                  <span className="name indent2"> height: </span>
                  <span className="name-content">"6' 1"</span>, <br></br>
                  <span className="name indent2"> weight: </span>
                  <span className="name-content">"185 lbs."</span>, <br></br>
                  <span className="name indent2"> reach: </span>
                  <span className="record-content">"77"</span>, <br></br>
                  <span className="name indent2"> stance: </span>
                  <span className="record-content">"Southpaw"</span>, <br></br>
                  <span className="name indent2"> wins: </span>
                  <span className="record-content">32</span>, <br></br>
                  <span className="name indent2"> losses: </span>
                  <span className="record-content">14</span>, <br></br>
                  <span className="name indent2"> draws: </span>
                  <span className="record-content">0</span>, <br></br>
                  <span className="name indent2"> belt: </span>
                  <span className="belt-content">false</span> <br></br>
                  <span className="name indent">
                    {"}"}, <br></br>
                  </span>
                  {"]"}
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🆔 Find the ID</p>
            <p className="doc-documentation-p">
              Queries for the "/id" route must take a first and last name query,
              or else it will return an error. <br></br>
              <br></br>For example, a query like this:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  www.ultimateapi.io/api/v1/
                  <mark className="highlight">
                    {"{"}your_key{"}"}
                  </mark>
                  /ufc/fighters/id?
                  <mark className="highlight">
                    {"firstname=conor&lastname=mcgregor"}
                  </mark>
                </p>
              </div>
              would return that fighter's ID:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  {"["}
                  <br></br> <span className="indent">{"{"}</span>
                  <br></br>
                  <span className="name indent2"> _id: </span>
                  <span className="name-content ">
                    "612a58304d73f352602c2548"
                  </span>
                  <br></br>
                  <span className="indent">{"}"}</span>
                  <br></br>
                  {"]"}
                </p>
              </div>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🔍 Search with ID</p>
            <p className="doc-documentation-p">
              Once you have the ID of a fighter, you can specifically look for
              properties from that fighter. <br></br>For example, a query like
              this:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  <p className="doc-documentation-code">
                    www.ultimateapi.io/api/v1/
                    <mark className="highlight">
                      {"{"}your_key{"}"}
                    </mark>
                    /ufc/fighters/
                    <mark className="highlight">
                      {"612a58304d73f352602c2548"}
                    </mark>
                    /firstname
                  </p>
                </p>
              </div>
              would return the property typed:
              <div className="doc-documentation-code-box">
                <p className="doc-documentation-code">
                  {" "}
                  <span className="name">{"{"}</span>
                  <br></br>
                  <span className="name indent"> firstname: </span>
                  <span className="name-content ">"Carlos"</span>
                  <br></br>
                  <span className="name">{"}"}</span>
                </p>
              </div>
              You can type any property that a fighter object has: <br></br>
              <br></br>
              <ul>
                <li className="indent">firstname</li>
                <li className="indent">lastname</li>
                <li className="indent">nickname</li>
                <li className="indent">height</li>
                <li className="indent">weight</li>
                <li className="indent">reach</li>
                <li className="indent">stance</li>
                <li className="indent">wins</li>
                <li className="indent">losses</li>
                <li className="indent">draws</li>
                <li className="indent">belt</li>
              </ul>
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h1">📝 FAQ</p>
            <p className="doc-documentation-subtitle">
              Here are some frequently asked questions incase any of these help
              you.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-list">
            <ul className="list">
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>How did you get the data?</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Why is the data formatted so weird?</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>How often will this API be updated?</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>I'm confused is this a solo project?</u>
                  </mark>
                </Link>
              </li>
              <li className="list-item">
                <Link>
                  <mark className="highlight">
                    <u>Are these real questions?</u>
                  </mark>
                </Link>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">How did you get the data?</p>
            <p className="doc-documentation-p">
              The data is continuously scraped from multiple MMA websites.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">
              Why is the data formatted so weird?
            </p>
            <p className="doc-documentation-p">
              Since the data is scraped, lets just say the scrapping methods
              aren't the best. We're looking to improve that though.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">
              How often will this API be updated?
            </p>
            <p className="doc-documentation-p">
              I'll be working on my landing page after this is fully developed,
              so updating will come slowly. You can always yell at me on my
              emails to get me to hurry up though.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">
              I'm confused is this a solo project? Because you've used "we" and
              now you're contradicting yourself.
            </p>
            <p className="doc-documentation-p">
              Yeah it's a solo project, but saying "we" sounds a lot better,
              don't you think?
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">Are these real questions?</p>
            <p className="doc-documentation-p">
              Nope, but it makes the documentation look a lot bigger B)
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h1">🎉 Thank you</p>
            <p className="doc-documentation-p">
              Thank you to whoever gets this far on the site! Even if you
              probably won't use the API ;D
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
  .doc-documentation-h3 {
    font-size: 30px;
    margin-top: 60px;
    margin-left: 20px;
  }
  .doc-documentation-p-sub {
    font-size: 17px;
    margin-top: 20px;
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.7;
  }
  .record-content {
    color: #1100c9;
  }
  .belt-content {
    color: #4f0094;
  }
  .name-content {
    color: #378f00;
  }
  .indent {
    margin-left: 25px;
  }
  .indent2 {
    margin-left: 50px;
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
    font-size: 14px;
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
    background-color: #f7f7f7;
    border-style: none;
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
