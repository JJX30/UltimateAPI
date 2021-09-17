import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Doc = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <div className="dashboard">
        <div className="dashboard-bar">
          <div className="dashboard-profile-">
            <p className="dashboard-profile-text">Profile</p>
            <ProfileCard link={false}></ProfileCard>
          </div>
          <div className="dashboard-divider"></div>
        </div>
      </div>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Doc;

const Wrapper = styled.div``;
