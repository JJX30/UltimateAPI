import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { UserContext } from "./UserContext";
import { useHistory } from "react-router";
//1224
const Modal = ({ showModal, setShowModal }) => {
  const closeModal = () => {
    setShowModal((prev) => {
      return { show: !prev.show };
    });
  };
  if (showModal.type === "email") {
    return (
      <>
        {showModal.show ? (
          <EmailModal closeModal={closeModal}></EmailModal>
        ) : null}
      </>
    );
  } else if (showModal.type === "key") {
    return (
      <>
        {showModal.show ? <KeyModal closeModal={closeModal}></KeyModal> : null}
      </>
    );
  } else if (showModal.type === "password") {
    return (
      <>
        {showModal.show ? (
          <PasswordModal closeModal={closeModal}></PasswordModal>
        ) : null}
      </>
    );
  }
};

const PasswordModal = ({ closeModal }) => {
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState({ new: "", old: "" });
  const errorMessage = useRef(null);
  const history = useHistory();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    errorMessage.current.hidden = true;
    setPassword({ ...password, [name]: value });
  };
  const handleSubmit = async () => {
    if (password.new === password.old) {
      errorMessage.current.innerHTML = "Password cannot be the same";
      errorMessage.current.hidden = false;
    } else if (password.new !== "" && password.old !== "") {
      const authPassword = {
        new: password.new,
        old: password.old,
        email: user.email,
        apiKey: user.apiKey,
        registrationDate: user.registrationDate,
      };
      const url = "/api/changepassword";

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(authPassword),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.status === 404) {
          errorMessage.current.innerHTML = "Incorrect password";
          errorMessage.current.hidden = false;
        } else {
          //successful
          alert("Changed password!");
          setUser({
            email: result.email,
            password: result.password,
            apiKey: result.apiKey,
            registrationDate: result.registrationDate,
            image: `https://avatars.dicebear.com/api/identicon/${result.registrationDate}.svg`,
          });
          history.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      errorMessage.current.innerHTML = "Please input the password";
      errorMessage.current.hidden = false;
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
            <p>Old password:</p>
            <input
              className="dashboard-input"
              type="password"
              value={password.old}
              onChange={handleChange}
              name="old"
            />
          </div>
          <div className="modal-section-2">
            <p>New password:</p>
            <input
              className="dashboard-input"
              type="password"
              value={password.new}
              onChange={handleChange}
              name="new"
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
  const { user, setUser } = useContext(UserContext);
  const [key, setKey] = useState(user.apiKey);
  const errorMessage = useRef(null);
  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value;
    errorMessage.current.hidden = true;
    setKey(value);
  };
  const handleSubmit = async () => {
    const newKey = {
      old: user.apiKey,
      email: user.email,
      registrationDate: user.registrationDate,
    };

    const url = "/api/changekey";
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(newKey),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.status === 404) {
        errorMessage.current.innerHTML = "Something went wrong";
        errorMessage.current.hidden = false;
      } else {
        alert("New key generated!");
        setUser({
          email: result.email,
          password: result.password,
          apiKey: result.apiKey,
          registrationDate: result.registrationDate,
          image: `https://avatars.dicebear.com/api/identicon/${result.registrationDate}.svg`,
        });
        history.push("/");
      }
    } catch (err) {
      console.log(err);
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
  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState(user.email);
  const history = useHistory();
  const errorMessage = useRef(null);
  const handleChange = (e) => {
    errorMessage.current.hidden = true;
    const value = e.target.value;
    errorMessage.current.hidden = true;
    setEmail(value);
  };
  const handleSubmit = async () => {
    if (email === "") {
      errorMessage.current.innerHTML = "Cannot be empty";
      errorMessage.current.hidden = false;
    } else if (!email.includes("@")) {
      errorMessage.current.innerHTML = "This is not a valid email address";
      errorMessage.current.hidden = false;
    } else {
      const newEmail = {
        new: email,
        old: user.email,
        apiKey: user.apiKey,
        registrationDate: user.registrationDate,
        password: user.password,
      };
      const url = "/api/changeemail";

      const options = {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(newEmail),
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result.status === 404) {
          errorMessage.current.innerHTML = "This email does not exist";
          errorMessage.current.hidden = false;
        } else {
          alert("Email successfully changed!");
          setUser({
            email: newEmail.new,
            password: result.password,
            apiKey: result.apiKey,
            registrationDate: result.registrationDate,
            image: `https://avatars.dicebear.com/api/identicon/${result.registrationDate}.svg`,
          });
          history.push("/");
        }
      } catch (err) {
        console.log(err);
      }
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
            <p className="modal-section-2-p">Change email to:</p>
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
  @media only screen and (max-width: 890px) {
    .modal-body {
      width: 500px;
      height: 300px;
      border-style: solid;
      border-width: 2px;
      border-radius: 15px;
      border-color: #9c9a9b;
      box-shadow: 5px 7px #dddddd;
    }
    .modal-section-2 {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 150px;
      font-family: Roboto, sans-serif;
      font-size: 24px;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.8);
      margin: 10px;
    }
  }
`;

export default Modal;
