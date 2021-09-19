import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { UserContext } from "./UserContext";

const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal((prev) => {
      return { show: !prev.show };
    });
  };
  if (showModal.type === "email") {
    return (
      <>
        {showModal ? <EmailModal closeModal={closeModal}></EmailModal> : null}
      </>
    );
  } else if (showModal.type === "key") {
    return (
      <>{showModal ? <KeyModal closeModal={closeModal}></KeyModal> : null}</>
    );
  } else if (showModal.type === "password") {
    return (
      <>
        {showModal ? (
          <PasswordModal closeModal={closeModal}></PasswordModal>
        ) : null}
      </>
    );
  }
};

const PasswordModal = ({ closeModal }) => {
  const { user } = useContext(UserContext);
  const [password, setPassword] = useState(user.password);
  const errorMessage = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    errorMessage.current.hidden = true;
    setPassword(value);
  };
  const handleSubmit = () => {
    if (password === "") {
    }
  };
  return (
    <>
      <Wrapper>
        <div className="modal-body">
          <div className="modal-section-1">
            <p className="profile-text">Password</p>
            <button onClick={closeModal} className="modal-close-button">
              <MdClose className="icon"></MdClose>
            </button>
          </div>
          <div className="modal-section-2">
            <p>Change password:</p>
            <input
              className="dashboard-input"
              type="email"
              value={password}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="modal-section-3">
            <button onClick={handleSubmit} className="modal-submit-button">
              Change
            </button>
            <p hidden ref={errorMessage} className="error-message">
              error
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const KeyModal = ({ closeModal }) => {
  const { user } = useContext(UserContext);
  const [key, setKey] = useState(user.apiKey);
  const errorMessage = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    errorMessage.current.hidden = true;
    setKey(value);
  };
  const handleSubmit = () => {
    if (key === "") {
    }
  };
  return (
    <>
      <Wrapper>
        <div className="modal-body">
          <div className="modal-section-1">
            <p className="profile-text">Key</p>
            <button onClick={closeModal} className="modal-close-button">
              <MdClose className="icon"></MdClose>
            </button>
          </div>
          <div className="modal-section-2">
            <p>Generate another key:</p>
            <input
              className="dashboard-input"
              type="email"
              value={key}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="modal-section-3">
            <button onClick={handleSubmit} className="modal-submit-button">
              Generate
            </button>
            <p hidden ref={errorMessage} className="error-message">
              error
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const EmailModal = ({ closeModal }) => {
  const { user } = useContext(UserContext);
  const [email, setEmail] = useState(user.email);
  const errorMessage = useRef(null);
  const handleChange = (e) => {
    const value = e.target.value;
    errorMessage.current.hidden = true;
    setEmail(value);
  };
  const handleSubmit = () => {
    if (email === "") {
    }
  };
  return (
    <>
      <Wrapper>
        <div className="modal-body">
          <div className="modal-section-1">
            <p className="profile-text">Email</p>
            <button onClick={closeModal} className="modal-close-button">
              <MdClose className="icon"></MdClose>
            </button>
          </div>
          <div className="modal-section-2">
            <p>Change email to:</p>
            <input
              className="dashboard-input"
              type="email"
              value={email}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="modal-section-3">
            <button onClick={handleSubmit} className="modal-submit-button">
              Change
            </button>
            <p hidden ref={errorMessage} className="error-message">
              error
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .error-message {
    color: red;
  }
  .modal-submit-button {
    width: 150px;
    height: 50px;
    cursor: pointer;
    border-radius: 50px;
    border-style: none;
    color: white;
    background: rgb(185, 1, 1);
    background: linear-gradient(
      360deg,
      rgba(185, 1, 1, 1) 0%,
      rgba(219, 0, 0, 1) 100%
    );
    font-family: Roboto, sans-serif;
    font-size: 20px;
    font-weight: 300;
  }
  .modal-section-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .modal-section-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 220px;
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }
  .modal-body {
    width: 888.48px;
    height: 400px;
    border-style: solid;
    border-width: 2px;
    border-radius: 15px;
    border-color: #9c9a9b;
    box-shadow: 5px 7px #dddddd;
  }
  .modal-section-1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    padding: 10px;
    border-radius: 13px 13px 0 0;
    border-style: solid;
  }
  .profile-text {
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-weight: 300;
    color: white;
  }
  .modal-close-button {
    height: 29px;
    border-style: none;
    background-color: black;
  }
  .icon {
    color: white;
    height: 30px;
    width: 30px;
    background-color: black;
  }
`;

export default Modal;
