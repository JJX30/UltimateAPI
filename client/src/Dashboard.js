import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
const Dashboard = () => {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <div>THI SIS THE DASHBOARD</div>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div``;
