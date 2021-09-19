import React, { useContext, useState } from "react";
import Footer from "./Footer";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import Navbar from "./Navbar";
import { FiEdit } from "react-icons/fi";
import ProfileCard from "./ProfileCard";
import Modal from "./Modal";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState({ show: false, type: "" });
  function openModal(type) {
    setShowModal((prev) => {
      return { show: !prev.show, type: type };
    });
  }
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
        {showModal ? (
          <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
        ) : (
          <div className="dashboard-options">
            <div className="setting dashboard-options-email">
              <div className="left">
                <p>Email:</p>
                <input
                  className="dashboard-input"
                  type="text"
                  value={user.email}
                  readOnly
                />
              </div>
              <button
                onClick={() => {
                  openModal("email");
                }}
                className="dashboard-button"
              >
                <FiEdit className="icon"></FiEdit>
              </button>
            </div>
            <div className="setting dashboard-options-apikey">
              <div className="left">
                <p>Key:</p>
                <input
                  className="dashboard-input"
                  type="text"
                  value={user.apiKey}
                  readOnly
                />
              </div>
              <button
                onClick={() => {
                  openModal("key");
                }}
                className="dashboard-button"
              >
                <FiEdit className="icon"></FiEdit>
              </button>
            </div>
            <div className="setting dashboard-options-password">
              <div className="left">
                <p>Password:</p>
                <input
                  className="dashboard-input"
                  type="password"
                  value="nicetrydumbass"
                  readOnly
                />
              </div>
              <button
                onClick={() => {
                  openModal("password");
                }}
                className="dashboard-button"
              >
                <FiEdit className="icon"></FiEdit>
              </button>
            </div>
            <div className="setting dashboard-options-registration">
              <p>Account created on: {user.registrationDate}</p>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  .left {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 650px;
  }
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
    justify-content: space-between;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: #9c9a9b;
    color: rgba(0, 0, 0, 0.8);
  }
  .dashboard-input {
    width: 500px;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: #9c9a9b;
    color: rgba(0, 0, 0, 0.8);
  }
  .dashboard-button {
    width: 32px;
    background-color: white;
    border-style: none;
  }

  .dashboard-button:active {
    background-color: whitesmoke;
  }

  .icon {
    width: 25px;
    height: 25px;
  }
`;
