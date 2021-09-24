import React, { useEffect, useContext, useRef, useState } from "react";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";
import { UserContext } from "./UserContext";
import SearchData from "./SearchData";
import { HashLink } from "react-router-hash-link";

const DocNavbar = () => {
  const { setUser } = useContext(UserContext);
  const profileLink = useRef(null);
  const docLink = useRef(null);
  const searchBar = useRef(null);
  const dynamicButton = useRef(null);
  const history = useHistory();

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  useEffect(() => {
    if (Auth.isAuthenticated()) {
      dynamicButton.current.innerHTML = "sign out";
      profileLink.current.hidden = false;
      docLink.current.hidden = false;
    }
  });

  const handleClick = () => {
    if (Auth.isAuthenticated()) {
      console.log("Signed out");
      setUser(null);
      Auth.logout(() => {
        dynamicButton.current.innerHTML = "sign in";
        history.push("/");
        profileLink.current.hidden = true;
        docLink.current.hidden = true;
        alert("You have signed out");
      });
    } else {
      history.push("/signin");
    }
  };
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClickoutside);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickoutside);
    };
  }, []);
  const handleClickoutside = (e) => {
    if (searchBar.current.contains(e.target)) {
      searchBar.current.style.display = "block";
      return;
    }
    // outside click
    searchBar.current.style.display = "none";
  };
  const handleLink = () => {
    searchBar.current.style.display = "none";
  };

  const handleFocus = () => {
    searchBar.current.style.display = "block";
  };
  return (
    <DocDiv>
      <div className="navbar-search">
        <Link className="navbar-link navbar-logo" to="/">
          <GiBoxingGloveSurprise
            size={70}
            color="#DB0000"
          ></GiBoxingGloveSurprise>
        </Link>

        <div className="search">
          <input
            className="nav-input"
            type="text"
            placeholder="search the documentation..."
            onChange={handleChange}
            value={search}
            onFocus={handleFocus}
          />
          <div ref={searchBar} className="nav-search-box">
            {search !== "" ? (
              <div>
                {SearchData.map(({ title, link }, key) => {
                  const newVal = title.split(" ").join("");
                  const newSearch = search.split(" ").join("");
                  if (newVal.toLowerCase().includes(newSearch.toLowerCase())) {
                    return (
                      <div className="search-option" key={key}>
                        <HashLink
                          onClick={handleLink}
                          className="option-link"
                          to={link}
                        >
                          {title}
                        </HashLink>
                      </div>
                    );
                  } else {
                    return <div className="search-empty" key={key}></div>;
                  }
                })}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="navbar-links">
        <div className="navbar-profile">
          <Link
            hidden
            ref={profileLink}
            className="navbar-link"
            to="/dashboard"
          >
            profile
          </Link>
          <Link
            hidden
            ref={docLink}
            className="navbar-link navbar-doc"
            to="/doc"
          >
            doc
          </Link>
        </div>
        <div className="navbar-signin">
          <button
            className="navbar-link"
            ref={dynamicButton}
            onClick={handleClick}
          >
            sign in
          </button>
        </div>
      </div>
    </DocDiv>
  );
};

export default DocNavbar;

const DocDiv = styled.nav`
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  background-color: black;
  height: 78px;
  width: 1440px;
  * {
    outline: none;
  }
  .option-link {
    text-decoration: none;
    color: black;
    width: 100%;
  }
  .search-empty {
    border-style: none;
  }
  .search-option {
    background-color: white;
    border-style: solid;
    border-width: 0 0 1px 0; /* top right bottom left */
    height: 50px;
    padding: 10px;
    font-family: Roboto, sans-serif;
  }
  .search-option:hover {
    background-color: #dedede;
  }
  .nav-search-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 490px;
    background-color: white;
    z-index: 1;
    margin-left: 20px;
    border-style: solid;
    border-width: 1px 1px 0 1px;
  }
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
  .navbar-profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 150px;
  }
  .navbar-signin {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
  }
  .navbar-links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 360px;
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
  .nav-input {
    width: 533px;
    height: 42px;
    border-radius: 50px;
    border-style: none;
    font-size: 18px;
    padding-inline-start: 30px;
    padding-inline-end: 30px;
  }
  input::placeholder {
    font-size: 18px;
  }
`;
