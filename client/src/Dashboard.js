import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import { FiEdit } from "react-icons/fi";
import ProfileCard from "./ProfileCard";
const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navbar></Navbar>
      <div className="dashboard">
        <div className="dashboard-bar">
          <p>Profile</p>
          <ProfileCard></ProfileCard>
        </div>
        <div className="dashboard-divider"></div>
        <div className="dashboard-options">
          <div className="setting dashboard-options-email">
            <p>{user.emails}</p>
            <FiEdit></FiEdit>
          </div>
          <div className="setting dashboard-options-apikey">
            <p>{user.apiKey}</p>
            <FiEdit></FiEdit>
          </div>
          <div className="setting dashboard-options-password">
            <p>Change password</p>
            <FiEdit></FiEdit>
          </div>
          <div className="setting dashboard-options-registration">
            <p>Account created on: {user.registrationDate}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;

const Wrapper = styled.div``;
