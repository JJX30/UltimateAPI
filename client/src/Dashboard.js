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
        <div className="dashboard-options">
          <div className="setting dashboard-options-email">
            <p>Email: {user.email}</p>
            <FiEdit></FiEdit>
          </div>
          <div className="setting dashboard-options-apikey">
            <p>Key: {user.apiKey}</p>
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
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  .dashboard {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .dashboard-bar {
    display: flex;
    flex-direction: row;
  }
  .dashboard-profile-content {
    display: flex;
    flex-direction: row;
  }
  .dashboard-divider {
    height: 500px;
    width: 2px;
    background-color: #9c9a9b;
    margin: 20px;
  }
  .dashboard-options {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .dashboard-profile-text {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    margin: 10px;
  }
  .setting {
    display: flex;
    flex-direction: row;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    color: #9c9a9b;
    color: rgba(0, 0, 0, 0.8);
  }
`;
