import React, { useState, useMemo } from "react";
import ReactDom from "react-dom";
import Info from "./Info";
import Signup from "./Signup";
import styled from "styled-components";
import "./index.css";
import Signin from "./Signin";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Error from "./Error";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";
import Doc from "./Doc";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={providerUser}>
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar></Navbar>
              <div className="homepage">
                <div className="homepage-logo">
                  <h1 className="homepage-logo-heading">UltimateAPI</h1>
                  <p className="homepage-logo-content">
                    for UFC fighters and stats
                  </p>
                </div>
                <div className="homepage-divider"></div>
                <Signup></Signup>
              </div>
              <Info></Info>
              <Footer></Footer>
            </Route>
            <Route exact path="/signin">
              <Navbar></Navbar>
              <div className="homepage">
                <div className="homepage-logo">
                  <h1 className="homepage-logo-heading">Sign in</h1>
                  <p className="homepage-logo-content">
                    for UFC fighters and stats
                  </p>
                </div>
                <div className="homepage-divider"></div>
                <div className="homepage-container">
                  <Signin></Signin>
                </div>
              </div>
              <Footer></Footer>
            </Route>
            <ProtectedRoute
              exact
              path="/dashboard"
              component={Dashboard}
            ></ProtectedRoute>
            <ProtectedRoute exact path="/doc" component={Doc}></ProtectedRoute>
            <Route path="*">
              <Navbar></Navbar>
              <Error></Error>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </UserContext.Provider>
  );
}
const Wrapper = styled.div`
  .homepage {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 123px;
    margin-bottom: 123px;
  }
  .homepage-container {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .homepage-logo {
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .homepage-divider {
    height: 444px;
    width: 1px;
    background-color: black;
    color: black;
  }
  .homepage-logo-heading {
    font-size: 72px;
    margin: 0px;
    font-weight: 500;
  }
  .homepage-logo-content {
    font-size: 24px;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
    font-weight: 300;
  }
`;

ReactDom.render(<App></App>, document.getElementById("root"));
