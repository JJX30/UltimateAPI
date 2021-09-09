import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import dynamicImage from "./images/conor.png";

const Info = () => {
  return (
    <Wrapper>
      <div id="about" className="info-body">
        <div className="info-content">
          <button>
            <FaArrowLeft size={40}></FaArrowLeft>
          </button>
          <div className="info-content-text">
            <h1 className="info-content-heading">
              UFC fighter statistics at your<br></br>fingertips
            </h1>
            <p className="info-content-paragraph">
              Query through all fighters in the UFC, past and present, and
              retrieve data instantly, all bundled up in a nice JSON response
            </p>
            <p className="info-content-paragraph-2">Query by:</p>
            <p className="info-content-paragraph-3">
              First <b>name</b> and <b>last name</b>, <b>wins</b>, <b>losses</b>
              , <b>draws</b>, etc.
            </p>
          </div>

          <div className="bruh">
            <button className="arrow">
              <FaArrowLeft size={20}></FaArrowLeft>
            </button>
            <div>
              <div className="info-content-slide">
                <img src={dynamicImage} alt="Conor McGregor" />
              </div>
            </div>
            <button className="arrow">
              <FaArrowRight size={20}></FaArrowRight>
            </button>
          </div>
          <button>
            <FaArrowRight size={40}></FaArrowRight>
          </button>
        </div>
        <div className="info-dynamic-bubbles">
          <button>
            <div className="bubble bubble-1"></div>
          </button>
          <button>
            <div className="bubble bubble-2"></div>
          </button>
          <button>
            <div className="bubble bubble-3"></div>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Info;

const Wrapper = styled.div`
  .info-body {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: rgb(138, 0, 0);
    background: linear-gradient(
      360deg,
      rgba(138, 0, 0, 1) 0%,
      rgba(179, 0, 0, 1) 100%
    );
    height: 564px;
  }
  .info-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: white;
    align-items: center;
    margin-top: 18px;
  }

  .info-dynamic-bubbles {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .bubble {
    background-color: black;
    border-radius: 50px;
    height: 10px;
    width: 10px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #797979;
  }
  .bubble-1 {
    background-color: white;
  }
  .info-content-text {
    width: 571px;
    height: 430px;
    background-color: black;
    border-radius: 50px;
    font-family: Roboto, sans-serif;
    font-weight: 200;
  }

  .bruh {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 449px;
    height: 430px;
    background-color: black;
    border-radius: 50px;
  }
  .info-content-heading {
    font-weight: 400;
    margin-left: 40px;
    margin-top: 35px;
    line-height: 49.5px;
  }
  .info-content-paragraph {
    margin-top: 37px;
    margin-left: 40px;
    margin-right: 40px;
    line-height: 36px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 100;
  }
  .info-content-paragraph-2 {
    margin-top: 60px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .info-content-paragraph-3 {
    margin-left: 40px;
    margin-right: 40px;
    color: rgba(255, 255, 255, 0.8);
  }

  img {
    height: 417px;
    width: 270px;
  }
  button {
    color: white;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
  }
`;
