import React from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Doc = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <div className="doc-body">
        <div className="doc-navbar">
          <ProfileCard link={true}></ProfileCard>
        </div>
      </div>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Doc;

const Wrapper = styled.div``;
