import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { UserContext } from "./UserContext";
import { FiEdit } from "react-icons/fi";

const ProfileCard = (props) => {
  const linked = props.link;

  if (linked) {
    return <LinkedProfileCard></LinkedProfileCard>;
  } else {
    return <UnlinkedProfileCard></UnlinkedProfileCard>;
  }
};

function UnlinkedProfileCard(props) {
  const { user } = useContext(UserContext);

  return (
    <Wrapper>
      <div className="profile-card">
        <div className="border">
          <div className="profile-image">
            <img src={user.image} alt={user.email} />
          </div>
          <div className="profile-text">
            <h3>{user.email}</h3>
            <p>key: {user.apiKey}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function LinkedProfileCard(props) {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const handleClick = () => {
    history.push("/dashboard");
  };
  return (
    <Wrapper>
      <div className="profile-card">
        <div className="border">
          <div className="profile-image">
            <img src={user.image} alt={user.email} />
          </div>
          <div className="profile-text">
            <h3>
              {user.email} <FiEdit onClick={handleClick}></FiEdit>
            </h3>
            <p>key: {user.apiKey}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProfileCard;

const Wrapper = styled.div`
  .profile-card {
    display: flex;
    flex-direction: row;
    font-family: Roboto, sans-serif;
  }
  .border {
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    align-items: center;
    padding: 5px;
    border-radius: 14px;
  }
  .profile-image {
    width: 200px;
    height: 200px;
    margin: 5px;
    padding: 2px;
    background-color: white;
  }

  .profile-text {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  h3 {
    font-size: 16px;
    margin: 5px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    margin: 5px;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
  }
`;
