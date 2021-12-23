import React, { useEffect, useContext, useRef, useState } from "react";
import logo from "./images/logo/logooo.jpg";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";
import { UserContext } from "./UserContext";
import SearchData from "./SearchData";
import { HashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";

const DocNavbar = () => {
  const { setUser } = useContext(UserContext);
  const profileLink = useRef(null);
  const docLink = useRef(null);
  const searchBar = useRef(null);
  const dynamicButton = useRef(null);
  const history = useHistory();
  const dropdown = useRef(null);
  const dropdownButton = useRef(null);
  const [size, setSize] = useState(window.innerWidth);
  const [small, setSmall] = useState(false);
  const [extraSmall, setExtraSmall] = useState(false);

  const [search, setSearch] = useState("");

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    if (size < 530) {
      setExtraSmall(true);
    }
    if (size > 530) {
      setExtraSmall(false);
    }
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  useEffect(() => {
    if (size < 1110) {
      setSmall(true);
    }
    if (size > 1110) {
      setSmall(false);
    }
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  useEffect(() => {
    authToken().then((result) => {
      if (result) {
        Auth.login(() => {
          if (size > 530) {
            dynamicButton.current.innerHTML = "sign out";
            profileLink.current.hidden = false;
            docLink.current.hidden = false;
          }
          getPayload().then(({ email, apiKey, registrationDate }) => {
            setUser({
              email: email,
              apiKey: apiKey,
              registrationDate: registrationDate,
              image: `https://avatars.dicebear.com/api/identicon/${registrationDate}.svg`,
            });
          });
        });
      }
    });
  }, [setUser, size]);

  const handleClick = () => {
    if (Auth.isAuthenticated()) {
      Auth.logout(() => {
        if (size > 530) {
          dynamicButton.current.innerHTML = "sign in";
          profileLink.current.hidden = true;
          docLink.current.hidden = true;
        }
        signout().then((result) => {
          if (result) {
            setUser(null);
          }
        });
        alert("You have signed out");
        history.push("/");
      });
    } else {
      history.push("/signin");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };
  useEffect(() => {
    if (!small) {
      // add when mounted
      document.addEventListener("mousedown", handleClickoutside);
      // return function to be called when unmounted
      return () => {
        document.removeEventListener("mousedown", handleClickoutside);
      };
    }
  }, [small]);
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
  const toggleDropdown = () => {
    if (dropdown.current.style.display === "flex") {
      dropdown.current.style.display = "none";
      dropdownButton.current.style.background = "black";
    } else {
      dropdown.current.style.display = "flex";

      dropdownButton.current.style.background = `linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    )`;
    }
  };
  return (
    <DocDiv>
      {small ? (
        <div className="navbar-search">
          <HashLink className="navbar-link navbar-logo" to="/#top">
            <img className="navbar-logo-pic" alt="UltimateAPI" src={logo}></img>
          </HashLink>
        </div>
      ) : (
        <div className="navbar-search">
          <HashLink className="navbar-link navbar-logo" to="/#top">
            <img className="navbar-logo-pic" alt="UltimateAPI" src={logo}></img>
          </HashLink>

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
                    if (
                      newVal.toLowerCase().includes(newSearch.toLowerCase())
                    ) {
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
      )}
      {extraSmall ? (
        <div className="dropdown">
          <div
            className="dropbtn"
            ref={dropdownButton}
            onClick={toggleDropdown}
          >
            <GiHamburgerMenu className="hamburger-icon"></GiHamburgerMenu>
          </div>
          <div className="dropdown-content" ref={dropdown}>
            <div>
              <HashLink className="navbar-link" to="/dashboard#top">
                profile
              </HashLink>
              <Link className="navbar-link navbar-doc" to="/doc">
                doc
              </Link>
              <div className="navbar-signin">
                <button
                  className="navbar-link"
                  ref={dynamicButton}
                  onClick={handleClick}
                >
                  sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar-links">
          <div className="navbar-profile">
            <HashLink
              hidden
              ref={profileLink}
              className="navbar-link"
              to="/dashboard#top"
            >
              profile
            </HashLink>
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
      )}
    </DocDiv>
  );
};
async function authToken() {
  const url = "/api/auth";
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    credentials: "same-origin",
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.isAuth) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
}

async function getPayload() {
  const url = "/api/user";
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result.status === 404) {
      return null;
    } else {
      return result;
    }
  } catch (err) {
    return null;
  }
}
async function signout() {
  const url = "/api/signout";
  const options = {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    credentials: "same-origin",
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if (result) {
      return true;
    }
  } catch (err) {
    return false;
  }
}
export default DocNavbar;

const DocDiv = styled.nav`
  display: flex;
  position: fixed;
  z-index: 10;
  justify-content: space-between;
  background-color: black;
  height: 78px;
  width: 100%;
  .navbar-logo-pic {
    height: 65px;
    margin-top: 4px;
    margin-left: 20px;
  }
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
    display: flex;
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
    width: 700px;
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
  /* Dropdown Button */
  .dropbtn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 16px;
    font-size: 16px;
    cursor: pointer;
    width: 90px;
    height: 78px;
  }
  .hamburger-icon {
    height: 40px;
    width: 40px;
  }

  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }

  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    flex-direction: column;
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
    left: -71px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
  }
  .navbar-link-dropdown {
    display: none;
  }
`;
