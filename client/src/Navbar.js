import React, { useEffect, useContext, useRef, useState } from "react";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";
import { UserContext } from "./UserContext";
import SearchData from "./SearchData";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const profileLink = useRef(null);
  const docLink = useRef(null);
  const dynamicButton = useRef(null);
  const searchBar = useRef(null);
  const history = useHistory();
  const [size, setSize] = useState(window.innerWidth);
  const [small, setSmall] = useState(false);

  const [search, setSearch] = useState("");

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    if (size < 984) {
      setSmall(true);
    }
    if (size > 984) {
      setSmall(false);
    }
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  useEffect(() => {
    async function fetchData() {
      const url = "/api/auth";
      const options = {
        method: "GET",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      };
      const response = await fetch(url, options);
      const result = await response.json();

      if (result.isAuth) {
        const { email, apiKey, registrationDate } = result.payload;
        console.log("auth");
        Auth.login(() => {
          setUser({
            email: email,
            apiKey: apiKey,
            registrationDate: registrationDate,
            image: `https://avatars.dicebear.com/api/identicon/${registrationDate}.svg`,
          });
        });
        dynamicButton.current.innerHTML = "sign out";
        profileLink.current.hidden = false;
        docLink.current.hidden = false;
      }
    }
    fetchData();
  }, [setUser]);

  const handleClick = () => {
    if (Auth.isAuthenticated()) {
      console.log("Signed out");
      setUser(null);
      async function fetchData() {
        const url = "/api/deletecookie";
        const options = {
          method: "GET",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        };
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.message);
        Auth.logout(() => {
          dynamicButton.current.innerHTML = "sign in";
          profileLink.current.hidden = true;
          docLink.current.hidden = true;
          history.push("/");
          alert("You have signed out");
        });
      }
      fetchData();
    } else {
      history.push("/signin");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  function handlePlaceholder() {
    if (user === null) {
      return "Sign in to access documentation...";
    }
    return "search the documentation...";
  }
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
  return (
    <Wrapper>
      {small ? (
        <div className="navbar-search">
          <Link className="navbar-link navbar-logo" to="/">
            <GiBoxingGloveSurprise
              size={70}
              color="#DB0000"
            ></GiBoxingGloveSurprise>
          </Link>
        </div>
      ) : (
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
              placeholder={handlePlaceholder()}
              onChange={handleChange}
              value={search}
              onFocus={handleFocus}
            />

            <div ref={searchBar} className="nav-search-box">
              {search !== "" && user !== null ? (
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
  * {
    outline: none;
  }
  .option-link {
    text-decoration: none;
    color: black;
    width: 100%;

    padding: 10px;
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
    font-family: Roboto, sans-serif;
  }
  .search-option:hover {
    background-color: #dedede;
  }
  .search {
    margin-top: 18px;
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
    align-items: flex-start;
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
