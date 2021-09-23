import React, { useRef } from "react";
import styled from "styled-components";
import DocNavbar from "./DocNavbar";
import DocFooter from "./DocFooter";
import { HashLink } from "react-router-hash-link";
// import { BsLink } from "react-icons/bs";
import { GrDown } from "react-icons/gr";

const Doc = () => {
  // const [displayGetting, setDisplayGetting] = useState("none");
  // const [displayStructure, setDisplayStructure] = useState("none");
  // const [displayQueries, setDisplayQueries] = useState("none");
  // const [displayFAQ, setDisplayFAQ] = useState("none");
  const gettingDropDown = useRef(null);
  const structureDropDown = useRef(null);
  const queriesDropDown = useRef(null);
  const faqDropDown = useRef(null);
  const miniDropDown = useRef(null);
  const list = [
    { ref: gettingDropDown, name: "getting" },
    { ref: structureDropDown, name: "structure" },
    { ref: queriesDropDown, name: "queries" },
    { ref: faqDropDown, name: "faq" },
  ];

  function handleClick(type) {
    list.forEach(({ ref, name }) => {
      if (name === type) {
        console.log("bruh");
        console.log(ref.current.style.display);
        if (
          ref.current.style.display === "none" ||
          ref.current.style.display === ""
        ) {
          console.log("bruh");
          ref.current.style.display = "flex";
        } else {
          ref.current.style.display = "none";
        }
      } else {
        ref.current.style.display = "none";
      }
    });
  }

  const handleMini = () => {
    if (miniDropDown.current.style.display === "flex") {
      miniDropDown.current.style.display = "none";
    } else {
      miniDropDown.current.style.display = "flex";
    }
  };
  return (
    <Wrapper>
      <DocNavbar></DocNavbar>
      <div className="doc-bar">
        <div className="doc-nav-container">
          <nav className="doc-nav">
            <ul className="doc-nav-list">
              <div className="doc-nav-link-container">
                <HashLink to="/doc#top" className="doc-nav-links">
                  🔎GETTING STARTED{" "}
                </HashLink>
                <button
                  onClick={() => {
                    handleClick("getting");
                  }}
                  className="arrow-icon"
                >
                  <GrDown></GrDown>
                </button>
              </div>
              <div ref={gettingDropDown} className="doc-nav-drop-list">
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#getting-started-try"
                    className="doc-nav-drop-links"
                  >
                    🥊 Try UltimateAPI
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    HashLink
                    to="/doc#getting-started-generate"
                    className="doc-nav-drop-links"
                  >
                    🔑 Generate the key
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#getting-started-your"
                    className="doc-nav-drop-links"
                  >
                    🥇 Your first request
                  </HashLink>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <HashLink to="/doc#structure" className="doc-nav-links">
                  🪜STRUCTURE
                </HashLink>
                <button
                  onClick={() => {
                    handleClick("structure");
                  }}
                  className="arrow-icon"
                >
                  <GrDown></GrDown>
                </button>
              </div>
              <div ref={structureDropDown} className="doc-nav-drop-list">
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#structure-id"
                    className="doc-nav-drop-links"
                  >
                    🎫 ID
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#structure-name"
                    className="doc-nav-drop-links"
                  >
                    ✒️ Name
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#structure-stats"
                    className="doc-nav-drop-links"
                  >
                    📊 Stats
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#structure-record"
                    className="doc-nav-drop-links"
                  >
                    🏆 Record
                  </HashLink>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <HashLink to="/doc#queries" className="doc-nav-links">
                  ❓QUERIES
                </HashLink>
                <button
                  onClick={() => {
                    handleClick("queries");
                  }}
                  className="arrow-icon"
                >
                  <GrDown></GrDown>
                </button>
              </div>
              <div ref={queriesDropDown} className="doc-nav-drop-list">
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#queries-fighter"
                    className="doc-nav-drop-links"
                  >
                    🥷 Find a fighter
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container-bruh">
                  <HashLink
                    to="/doc#queries-attributes"
                    className="doc-nav-drop-links"
                  >
                    🕵️ Find by attributes
                  </HashLink>
                  <button
                    onClick={() => {
                      handleMini();
                    }}
                    className="arrow-icon-mini"
                  >
                    <GrDown></GrDown>
                  </button>
                </div>
                <div ref={miniDropDown} className="doc-nav-drop-list-mini">
                  <div className="doc-nav-drop-container-mini">
                    <HashLink
                      to="/doc#queries-height"
                      className="doc-nav-drop-links"
                    >
                      📏 Height
                    </HashLink>
                  </div>
                  <div className="doc-nav-drop-container-mini">
                    <HashLink
                      to="/doc#queries-weight"
                      className="doc-nav-drop-links"
                    >
                      ⚖️ Weight
                    </HashLink>
                  </div>
                  <div className="doc-nav-drop-container-mini">
                    <HashLink
                      to="/doc#queries-stance"
                      className="doc-nav-drop-links"
                    >
                      🥋 Stance
                    </HashLink>
                  </div>
                  <div className="doc-nav-drop-container-mini">
                    <HashLink
                      to="/doc#queries-rec"
                      className="doc-nav-drop-links"
                    >
                      🏅 Record
                    </HashLink>
                  </div>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#queries-find"
                    className="doc-nav-drop-links"
                  >
                    🆔 Find the ID
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#queries-search"
                    className="doc-nav-drop-links"
                  >
                    🔍 Search with ID
                  </HashLink>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <HashLink to="/doc#FAQ" className="doc-nav-links">
                  📝FAQ
                </HashLink>
                <button
                  onClick={() => {
                    handleClick("faq");
                  }}
                  className="arrow-icon"
                >
                  <GrDown></GrDown>
                </button>
              </div>
              <div ref={faqDropDown} className="doc-nav-drop-list">
                <div className="doc-nav-drop-container">
                  <HashLink to="/doc#FAQ-data" className="doc-nav-drop-links">
                    📀 How did you <br></br>get the data?
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink to="/doc#FAQ-weird" className="doc-nav-drop-links">
                    ⁉️ Why is the <br></br>data formatted <br></br>so weird?
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#FAQ-updated"
                    className="doc-nav-drop-links"
                  >
                    ⏰ How often <br></br>will this API <br></br>be updated?
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#FAQ-project"
                    className="doc-nav-drop-links"
                  >
                    ☝️ I'm confused <br></br>is this a <br></br>solo project?
                  </HashLink>
                </div>
                <div className="doc-nav-drop-container">
                  <HashLink
                    to="/doc#FAQ-questions"
                    className="doc-nav-drop-links"
                  >
                    🙃 Are these <br></br>real questions?
                  </HashLink>
                </div>
              </div>
              <div className="doc-nav-link-container">
                <HashLink to="/doc#thankyou" className="doc-nav-links">
                  🎉THANK YOU
                </HashLink>
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
                <HashLink to="/doc#getting-started-try">
                  <mark className="highlight">
                    <u>Try UltimateAPI</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#getting-started-generate">
                  <mark id="getting-started-try" className="highlight">
                    <u>Generate the key</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#getting-started-your">
                  <mark className="highlight">
                    <u>Your first request</u>
                  </mark>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🥊 Try UltimateAPI</p>
            <p className="doc-documentation-p">
              Whether you’re making an app, making your own API, or just an MMA
              fan that happens to code, UltimateAPI is here to provide you with
              the best UFC data at the fastest speeds. <br></br>{" "}
              <br id="getting-started-generate"></br>
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
              <br id="getting-started-your"></br>
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
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                www.ultimateapi.io/api/v1/
                <mark className="highlight">
                  {"{"}your_key{"}"}
                </mark>
                /ufc/fighters/612a58314d73f352602c2ad5
              </p>
            </div>
            <p className="doc-documentation-p-sub">
              Place your key within this link and navigate to the url. You
              should get a page that returns some JSON data from a fighter in
              our database.<br></br>
              <br id="structure"></br>
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
                <HashLink to="/doc#structure-id">
                  <mark className="highlight">
                    <u>ID</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#structure-name">
                  <mark className="highlight">
                    <u>Name</u>
                  </mark>
                </HashLink>
              </li>
              <li id="structure-id" className="list-item">
                <HashLink to="/doc#structure-stats">
                  <mark className="highlight">
                    <u>Stats</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#structure-record">
                  <mark className="highlight">
                    <u>Record</u>
                  </mark>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🎫 ID</p>
            <p className="doc-documentation-p">
              Each fighter has a unique ID property given to them, it's a series
              of random characters.
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                <span className="name">_id: </span>
                <span id="structure-name" className="name-content">
                  "612a58314d73f352602c2702"
                </span>
              </p>
            </div>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> ✒️ Name</p>
            <p className="doc-documentation-p">
              Each fighter has a name property for their first name, last name,
              and nickname. Many fighters share names, so the queries account
              for that.
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                <span className="name">firstname: </span>
                <span className="name-content">"Tony"</span>, <br></br>
                <span className="name">lastname: </span>
                <span className="name-content">"Ferguson"</span>, <br></br>
                <span className="name">nickname: </span>
                <span id="structure-stats" className="name-content">
                  "El Cucuy"
                </span>
              </p>
            </div>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 📊 Stats</p>
            <p className="doc-documentation-p">
              Each fighter has attribute properties for their weight, height,
              reach, and stance. <br></br>
              Stance property can be Orthodox, Southpaw, or Switch.
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                <span className="name">height: </span>
                <span className="name-content">"5' 11"</span>, <br></br>
                <span className="name">weight: </span>
                <span className="name-content">"155 lbs."</span>, <br></br>
                <span className="name">reach: </span>
                <span className="name-content">"76"</span>, <br></br>
                <span className="name">stance: </span>
                <span id="structure-record" className="name-content">
                  "Orthodox"
                </span>
              </p>
            </div>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🏆 Record</p>
            <p className="doc-documentation-p">
              Finally each fighter has record properties for counting their
              achievements... <br></br>
              <br></br>
              Who is the best!
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                <span className="name">wins: </span>
                <span className="record-content">26</span>, <br></br>
                <span className="name">losses: </span>
                <span className="record-content">6</span>, <br></br>
                <span className="name">draws: </span>
                <span className="record-content">0</span>, <br></br>
                <span className="name">belt: </span>
                <span id="queries" className="belt-content">
                  false
                </span>
              </p>
            </div>
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
                <HashLink to="/doc#queries-fighter">
                  <mark className="highlight">
                    <u>Find a fighter</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#queries-attributes">
                  <mark className="highlight">
                    <u>Find by attributes</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item-indent">
                <HashLink to="/doc#queries-height">
                  <mark className="highlight">
                    <u>Height</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item-indent">
                <HashLink to="/doc#queries-weight">
                  <mark className="highlight">
                    <u>Weight</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item-indent">
                <HashLink to="/doc#queries-stance">
                  <mark className="highlight">
                    <u>Stance</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item-indent">
                <HashLink to="/doc#queries-rec">
                  <mark className="highlight">
                    <u>Record</u>
                  </mark>
                </HashLink>
              </li>
              <li id="queries-fighter" className="list-item">
                <HashLink to="/doc#queries-find">
                  <mark className="highlight">
                    <u>Find the ID</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#queries-search">
                  <mark className="highlight">
                    <u>Search with ID</u>
                  </mark>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2"> 🥷 Find a fighter</p>
            <p className="doc-documentation-p">
              The "/fighters" route takes a first name and last name query, you
              do not need both for the query to be valid.
              <br></br> Query may return more than one value if fighters share a
              name.<br></br>
              <br></br>
              For example, a query like this: <br></br>
            </p>
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
            <p className="doc-documentation-p-sub">
              would return list of conors:
            </p>
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
                <span id="queries-attributes" className="name indent">
                  {"}"} <br></br>
                </span>
                {"]"}
              </p>
            </div>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🕵️ Find by attributes</p>
            <p id="queries-height" className="doc-documentation-p">
              Queries for height, weight, stance, and record are all available
              and will return a list of fighters with those queries.{" "}
            </p>
            <p className="doc-documentation-h3">📏 Height</p>
            <p className="doc-documentation-p-sub">
              The "/height" route takes a height query and returns a list of
              fighters with that height. <br></br>
              <br></br>
              For example, a query like this:<br></br>
            </p>
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
            <p className="doc-documentation-p-sub">
              would return list of fighters with that height:
            </p>
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
                <span className="name-content">"The Lone Wolf"</span>, <br></br>
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
                  <br id="queries-weight"></br>
                </span>
                {"]"}
              </p>
            </div>
            <p className="doc-documentation-h3">⚖️ Weight</p>
            <p className="doc-documentation-p-sub">
              The "/weight" route takes a weight query and returns a list of
              fighters with that weight. <br></br>
              <br></br>
              For example, a query like this:<br></br>
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                www.ultimateapi.io/api/v1/
                <mark className="highlight">
                  {"{"}your_key{"}"}
                </mark>
                /ufc/fighters/weight?
                <mark id="queries-stance" className="highlight">
                  weight=155
                </mark>
              </p>
            </div>
            <p className="doc-documentation-p-sub">
              would return list of fighters with that weight.
            </p>
            <p className="doc-documentation-h3">🥋 Stance</p>
            <p className="doc-documentation-p-sub">
              The "/stance" route takes a stance query and returns a list of
              fighters with that stance. <br></br>
              <br></br>
              For example a query like this:<br></br>
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                www.ultimateapi.io/api/v1/
                <mark className="highlight">
                  {"{"}your_key{"}"}
                </mark>
                /ufc/fighters/stance?
                <mark id="queries-rec" className="highlight">
                  stance=switch
                </mark>
              </p>
            </div>
            <p className="doc-documentation-p-sub">
              would return list of fighters with that stance.
            </p>
            <p className="doc-documentation-h3">🏅 Record</p>
            <p className="doc-documentation-p-sub">
              The "/record" route takes a win, loss, or draw query and returns a
              list of fighters with those matching queries. <br></br>
              <br></br>
              For example, a query like this:<br></br>
            </p>
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
            <p className="doc-documentation-p-sub">
              would return list of fighters with that stance:
            </p>
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
            <p className="doc-documentation-p-sub">
              <br></br>
              You could query wins, losses, or draws individually, but if you
              want you could combine them to find the exact record you're
              looking for. <br></br> <br></br>For example, a query like this:
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                www.ultimateapi.io/api/v1/
                <mark className="highlight">
                  {"{"}your_key{"}"}
                </mark>
                /ufc/fighters/record?
                <mark className="highlight">{"wins=32&losses=14&draws=0"}</mark>
              </p>
            </div>
            <p className="doc-documentation-p-sub">would return:</p>
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
                </span>, <br></br>
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
                <span id="queries-find" className="name indent">
                  {"}"}, <br></br>
                </span>
                {"]"}
              </p>
            </div>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🆔 Find the ID</p>
            <p className="doc-documentation-p">
              Queries for the "/id" route must take a first and last name query,
              or else it will return an error. <br></br>
              <br></br>For example, a query like this:
            </p>
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
            <p className="doc-documentation-p-sub">
              would return that fighter's ID:
            </p>
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
                <span id="queries-search" className="indent">
                  {"}"}
                </span>
                <br></br>
                {"]"}
              </p>
            </div>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">🔍 Search with ID</p>
            <p className="doc-documentation-p">
              Once you have the ID of a fighter, you can specifically look for
              properties from that fighter. <br></br>For example, a query like
              this:
            </p>
            <div className="doc-documentation-code-box">
              <p className="doc-documentation-code">
                www.ultimateapi.io/api/v1/
                <mark className="highlight">
                  {"{"}your_key{"}"}
                </mark>
                /ufc/fighters/
                <mark className="highlight">{"612a58304d73f352602c2548"}</mark>
                /firstname
              </p>
            </div>
            <p className="doc-documentation-p-sub">
              would return the property queried:
            </p>
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
            <p className="doc-documentation-p-sub">
              You can query any property that a fighter object has, if you also
              have their ID: <br></br>
              <br></br>
            </p>
            <ul className="doc-documentation-list-sub">
              <li className="item indent">firstname</li>
              <li className="item indent">lastname</li>
              <li className="item indent">nickname</li>
              <li className="item indent">height</li>
              <li className="item indent">weight</li>
              <li className="item indent">reach</li>
              <li className="item indent">stance</li>
              <li className="item indent">wins</li>
              <li className="item indent">losses</li>
              <li className="item indent">draws</li>
              <li id="FAQ" className="indent">
                belt
              </li>
            </ul>
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
                <HashLink to="/doc#FAQ-data">
                  <mark className="highlight">
                    <u>How did you get the data?</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#FAQ-weird">
                  <mark className="highlight">
                    <u>Why is the data formatted so weird?</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#FAQ-updated">
                  <mark className="highlight">
                    <u>How often will this API be updated?</u>
                  </mark>
                </HashLink>
              </li>
              <li id="FAQ-data" className="list-item">
                <HashLink to="/doc#FAQ-project">
                  <mark className="highlight">
                    <u>I'm confused is this a solo project?</u>
                  </mark>
                </HashLink>
              </li>
              <li className="list-item">
                <HashLink to="/doc#FAQ-questions">
                  <mark className="highlight">
                    <u>Are these real questions?</u>
                  </mark>
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">How did you get the data?</p>
            <p id="FAQ-weird" className="doc-documentation-p">
              The data is continuously scraped from multiple MMA websites.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">
              Why is the data formatted so weird?
            </p>
            <p id="FAQ-updated" className="doc-documentation-p">
              Since the data is scraped, lets just say the scrapping methods
              aren't the best. We're looking to improve that though.
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">
              How often will this API be updated?
            </p>
            <p id="FAQ-project" className="doc-documentation-p">
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
            <p id="FAQ-questions" className="doc-documentation-p">
              Yeah it's a solo project, but saying "we" sounds a lot better,
              don't you think?
            </p>
          </div>
          <div className="doc-documentation-divider"></div>
          <div className="doc-documentation-heading">
            <p className="doc-documentation-h2">Are these real questions?</p>
            <p id="thankyou" className="doc-documentation-p">
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
  .item {
    margin: 10px;
  }
  .doc-documentation-list-sub {
    margin-left: 30px;
    font-weight: 300;
    list-style: circle;
  }
  .arrow-icon-mini {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 9px;
    background-color: #f7f7f7;
    border-style: none;
    cursor: pointer;
    width: 10px;
    height: 10px;
  }
  .doc-nav-drop-container-bruh {
    display: flex;
    flex-direction: row;
    margin: 5px;
  }
  .doc-nav-drop-list-mini {
    display: none;
    flex-direction: column;
    margin-left: 20px;
  }
  .doc-nav-drop-container-mini {
    margin: 5px;
  }
  .doc-nav-drop-list {
    display: none;
    flex-direction: column;
    margin-left: 40px;
  }
  .doc-nav-drop-container {
    margin: 5px;
  }
  .doc-nav-drop-links {
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #262626;
    text-decoration: none;
  }
  .doc-nav-drop-links:hover {
    color: #eb4034;
  }
  .list-item-indent {
    margin-left: 70px;
    margin-bottom: 20px;
    margin-top: 10px;
    list-style: circle;
  }
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
  .highlight:hover {
    /* background-color: rgba(255, 110, 110, 0.6); */
    background-color: rgba(219, 0, 0, 0.3);
  }
  .doc-documentation-code-box {
    border-style: solid;
    border-color: #c8c9cc;
    border-radius: 10px;
    background-color: whitesmoke;
    padding: 13px;
    padding-left: 20px;
    margin-top: 20px;
    font-size: 14px;
    margin-left: 20px;

    line-height: 1.7;
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
    cursor: pointer;
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
  .doc-nav-links:hover {
    color: #eb4034;
  }
  .doc-divider {
    width: 2px;
    background-color: #ebebeb;
  }
`;
