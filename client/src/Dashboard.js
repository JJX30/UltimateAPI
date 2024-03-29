import React, { useContext, useState } from "react";
import Footer from "./Footer";
import styled from "styled-components";
import { UserContext } from "./UserContext";
import Navbar from "./Navbar";
import { FiEdit } from "react-icons/fi";
import ProfileCard from "./ProfileCard";
import Modal from "./Modal";

//1224
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
          <div className="dashboard-profile">
            <p className="dashboard-profile-text">Profile</p>
            <div className="dashboard-profile-card">
              <ProfileCard link={false}></ProfileCard>
            </div>
          </div>
          <div className="dashboard-divider"></div>
        </div>
        {showModal.show ? (
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
  .dashboard-profile-card {
    margin-top: 95px;
  }
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
  .dashboard-profile {
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
  @media only screen and (max-width: 1224px) {
    .dashboard-profile-card {
      margin-top: 0px;
    }
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .dashboard-divider {
      display: none;
    }
    .dashboard-options {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .setting {
      margin: 20px;
    }
    .dashboard-profile {
      margin: 20px;
    }
  }
  @media only screen and (max-width: 722px) {
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .dashboard-divider {
      display: none;
    }
    .dashboard-options {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .setting {
      margin: 20px;
    }
    .dashboard-profile {
      margin: 20px;
    }
    .dashboard-button {
      display: none;
    }
  }
  @media only screen and (max-width: 690px) {
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .dashboard-divider {
      display: none;
    }
    .dashboard-options {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .setting {
      margin: 20px;
    }
    .dashboard-profile {
      margin: 20px;
    }
    .dashboard-button {
      display: none;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
    .dashboard-input {
      font-family: Roboto, sans-serif;
      font-size: 24px;
      font-weight: 300;
      color: #9c9a9b;
      color: rgba(0, 0, 0, 0.8);
    }
    .dashboard-options-registration {
      margin: 40px;
    }
  }
  @media only screen and (max-width: 650px) {
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .dashboard-divider {
      display: none;
    }
    .dashboard-options {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .setting {
      margin: 20px;
    }
    .dashboard-profile {
      margin: 20px;
    }
    .dashboard-button {
      display: none;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      width: 100%;
    }
    .dashboard-options-registration {
      margin: 40px;
    }
  }
  @media only screen and (max-width: 585px) {
    .dashboard {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .dashboard-divider {
      display: none;
    }
    .dashboard-options {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .setting {
      margin: 20px;
    }
    .dashboard-profile {
      margin: 20px;
    }
    .dashboard-button {
      display: none;
    }
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
    .dashboard-input {
      font-family: Roboto, sans-serif;
      font-size: 24px;
      font-weight: 300;
      color: #9c9a9b;
      color: rgba(0, 0, 0, 0.8);
      width: 100%;
    }
    .dashboard-options-registration {
      margin: 40px;
    }
  }
`;
