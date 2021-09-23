import React, { useEffect, useContext, useRef, useState } from "react";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth";
import { UserContext } from "./UserContext";
import SearchData from "./SearchData";

const Navbar = () => {
  const { setUser } = useContext(UserContext);
  const profileLink = useRef(null);
  const docLink = useRef(null);
  const dynamicButton = useRef(null);
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

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);
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
              placeholder="search the documentation..."
              onChange={handleChange}
              value={search}
            />
            <div className="nav-search-box">
              {search !== "" ? (
                <div>
                  {SearchData.map((value, key) => {
                    const newVal = value.split(" ").join("");
                    const newSearch = search.split(" ").join("");
                    if (
                      newVal.toLowerCase().includes(newSearch.toLowerCase())
                    ) {
                      return (
                        <div key={key}>
                          <p>{value}</p>
                        </div>
                      );
                    } else {
                      return <div key={key}></div>;
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

  .search {
    margin-top: 18px;
  }
  .nav-search-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 490px;
    background-color: blue;
    z-index: 1;
    margin-left: 20px;
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
