import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { DiOpensource } from "react-icons/di";
import conorImage from "./images/fighters/conor.png";
import alexImage from "./images/fighters/alex.png";
import brandonImage from "./images/fighters/brandon.png";
import cirylImage from "./images/fighters/ciryl.png";
import colbyImage from "./images/fighters/colby.png";
import israelImage from "./images/fighters/israel.png";
import janImage from "./images/fighters/jan.png";
import joseImage from "./images/fighters/jose.png";
import justinImage from "./images/fighters/justin.png";
import maxImage from "./images/fighters/max.png";
import seanImage from "./images/fighters/sean.png";
import bellaImage from "./images/promotions/bellator.png";
import cageImage from "./images/promotions/cage-warriors-logo.png";
import oneImage from "./images/promotions/onechamp.jpeg";
//650
const Info = () => {
  const bubble1 = useRef(null);
  const bubble2 = useRef(null);
  const bubble3 = useRef(null);

  const bubbleList = [bubble1, bubble2, bubble3];
  const slider = ["stats", "open", "updates"];
  const [index, setIndex] = useState(0);

  const [size, setSize] = useState(window.innerWidth);
  const [small, setSmall] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    if (size < 1100) {
      setSmall(true);
    }
    if (size > 1100) {
      setSmall(false);
    }
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  useEffect(() => {
    bubbleList.forEach((bubble, i) => {
      if (index === i) {
        bubble.current.style.backgroundColor = "white";
      } else {
        bubble.current.style.backgroundColor = "#797979";
      }
    });
  });

  const handleClickForward = () => {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex((num) => num + 1);
    }
  };
  const handleClickBackward = () => {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex((num) => num - 1);
    }
  };

  function handleBubble(num) {
    if (num === 1) {
      setIndex(0);
    } else if (num === 2) {
      setIndex(1);
    } else {
      setIndex(2);
    }
  }
  if (size < 650 && small) {
    return (
      <Wrapper>
        <div id="about" className="info-body">
          <div className="info-content">
            {<Slider which={slider[index]}></Slider>}
          </div>
          <div className="info-dynamic-bubbles">
            <button
              onClick={() => {
                handleClickBackward();
              }}
            >
              <FaArrowLeft className="icon" size={40}></FaArrowLeft>
            </button>
            <button
              onClick={() => {
                handleBubble(1);
              }}
            >
              <div ref={bubble1} className="bubble bubble-1"></div>
            </button>
            <button
              onClick={() => {
                handleBubble(2);
              }}
            >
              <div ref={bubble2} className="bubble bubble-2"></div>
            </button>
            <button
              onClick={() => {
                handleBubble(3);
              }}
            >
              <div ref={bubble3} className="bubble bubble-3"></div>
            </button>
            <button
              onClick={() => {
                handleClickForward();
              }}
            >
              <FaArrowRight className="icon" size={40}></FaArrowRight>
            </button>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div id="about" className="info-body">
          <div className="info-content">
            <button
              onClick={() => {
                handleClickBackward();
              }}
            >
              <FaArrowLeft className="icon" size={40}></FaArrowLeft>
            </button>
            {<Slider which={slider[index]}></Slider>}
            <button
              onClick={() => {
                handleClickForward();
              }}
            >
              <FaArrowRight className="icon" size={40}></FaArrowRight>
            </button>
          </div>
          <div className="info-dynamic-bubbles">
            <button
              onClick={() => {
                handleBubble(1);
              }}
            >
              <div ref={bubble1} className="bubble bubble-1"></div>
            </button>
            <button
              onClick={() => {
                handleBubble(2);
              }}
            >
              <div ref={bubble2} className="bubble bubble-2"></div>
            </button>
            <button
              onClick={() => {
                handleBubble(3);
              }}
            >
              <div ref={bubble3} className="bubble bubble-3"></div>
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }
};

const Slider = ({ which }) => {
  const fighterSlider = [
    "conor",
    "alex",
    "brandon",
    "ciryl",
    "colby",
    "israel",
    "jan",
    "jose",
    "justin",
    "max",
    "sean",
  ];
  const [fighterIndex, setFighterIndex] = useState(getRandomInt(11));

  const promotionSlider = ["bella", "cage", "one"];
  const [promotionIndex, setPromotionIndex] = useState(0);

  const [size, setSize] = useState(window.innerWidth);
  const [small, setSmall] = useState(false);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    if (size < 1100) {
      setSmall(true);
    }
    if (size > 1100) {
      setSmall(false);
    }
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  const handleFighterForward = () => {
    if (fighterIndex === 10) {
      setFighterIndex(0);
    } else {
      setFighterIndex((num) => num + 1);
    }
  };
  const handleFighterBackward = () => {
    if (fighterIndex === 0) {
      setFighterIndex(10);
    } else {
      setFighterIndex((num) => num - 1);
    }
  };
  const handlePromotionBackward = () => {
    if (promotionIndex === 0) {
      setPromotionIndex(2);
    } else {
      setPromotionIndex((num) => num - 1);
    }
  };
  const handlePromotionForward = () => {
    if (promotionIndex === 2) {
      setPromotionIndex(0);
    } else {
      setPromotionIndex((num) => num + 1);
    }
  };
  if (which === "stats") {
    return (
      <div>
        {small ? (
          <div className="info-content-small">
            <div className="info-content-text-small">
              <h1 className="info-content-heading">
                UFC fighter statistics at your<br></br>fingertips
              </h1>
              <p className="info-content-paragraph">
                Query through all fighters in the UFC, past and present, and
                retrieve data instantly, all bundled up in a nice JSON response
              </p>
              <p className="info-content-paragraph-2">Query by:</p>
              <p className="info-content-paragraph-3">
                First <b>name</b> and <b>last name</b>, <b>wins</b>,{" "}
                <b>losses</b>, <b>draws</b>, etc.
              </p>
            </div>
          </div>
        ) : (
          <div className="info-body-main">
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
                First <b>name</b> and <b>last name</b>, <b>wins</b>,{" "}
                <b>losses</b>, <b>draws</b>, etc.
              </p>
            </div>

            <div className="image-slider">
              <button className="icon arrow">
                <FaArrowLeft
                  onClick={handleFighterBackward}
                  size={20}
                ></FaArrowLeft>
              </button>
              <div>
                <Fighter which={fighterSlider[fighterIndex]}></Fighter>
              </div>
              <button className="icon arrow">
                <FaArrowRight
                  onClick={handleFighterForward}
                  size={20}
                ></FaArrowRight>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  } else if (which === "open") {
    return (
      <div>
        {small ? (
          <div className="info-content-small">
            <div className="info-content-text-small">
              <h1 className="info-content-heading">Open Source</h1>
              <p className="info-content-paragraph">
                Found a bug? Thought of a feature? Bored? Feel free to visit our
                repository and build on our ideas! We'd love to hear from you as
                well, please feel free to reach out below.
              </p>
              <p className="image-div">
                <a
                  href="https://github.com/JJX30/ultimateapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <AiFillGithub size={120}></AiFillGithub>
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="info-body-main">
            <div className="info-content-text">
              <h1 className="info-content-heading">Open Source</h1>
              <p className="info-content-paragraph">
                Found a bug? Thought of a feature? Bored? Feel free to visit our
                repository and build on our ideas! We'd love to hear from you as
                well, please feel free to reach out below.
              </p>
              <p className="image-div">
                <a
                  href="https://github.com/JJX30/ultimateapi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <AiFillGithub size={120}></AiFillGithub>
                </a>
              </p>
            </div>

            <div className="image-slider">
              <DiOpensource size={500}></DiOpensource>
            </div>
          </div>
        )}
      </div>
    );
  } else if (which === "updates") {
    return (
      <div>
        {small ? (
          <div className="info-content-small">
            <div className="info-content-text-small">
              <h1 className="info-content-heading">Coming soon...</h1>
              <p className="info-content-paragraph-2-open">Promotions:</p>
              <p className="info-content-paragraph-open">
                The UFC isn’t the only MMA promotion out there, so for that
                reason we’re looking to add more fighters from some of our other
                favorite promotions.
              </p>
              <p className="info-content-paragraph-2-open">Events:</p>
              <p className="info-content-paragraph-open">
                UFC events first, upcoming and previous event data will come in
                due time, we’ll keep you updated.
              </p>
            </div>
          </div>
        ) : (
          <div className="info-body-main">
            <div className="info-content-text">
              <h1 className="info-content-heading">Coming soon...</h1>
              <p className="info-content-paragraph-2-open">Promotions:</p>
              <p className="info-content-paragraph-open">
                The UFC isn’t the only MMA promotion out there, so for that
                reason we’re looking to add more fighters from some of our other
                favorite promotions.
              </p>
              <p className="info-content-paragraph-2-open">Events:</p>
              <p className="info-content-paragraph-open">
                UFC events first, upcoming and previous event data will come in
                due time, we’ll keep you updated.
              </p>
            </div>

            <div className="image-slider">
              <button onClick={handlePromotionBackward} className="icon arrow">
                <FaArrowLeft size={20}></FaArrowLeft>
              </button>

              <Promotion which={promotionSlider[promotionIndex]}></Promotion>

              <button onClick={handlePromotionForward} className="icon arrow">
                <FaArrowRight size={20}></FaArrowRight>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};
const Fighter = ({ which }) => {
  if (which === "conor") {
    return (
      <div className="info-content-slide-fighter">
        <img src={conorImage} alt="fighter" />
      </div>
    );
  } else if (which === "alex") {
    return (
      <div className="info-content-slide-fighter">
        <img src={alexImage} alt="fighter" />
      </div>
    );
  } else if (which === "brandon") {
    return (
      <div className="info-content-slide-fighter">
        <img src={cirylImage} alt="fighter" />
      </div>
    );
  } else if (which === "ciryl") {
    return (
      <div className="info-content-slide-fighter">
        <img src={brandonImage} alt="fighter" />
      </div>
    );
  } else if (which === "colby") {
    return (
      <div className="info-content-slide-fighter">
        <img src={colbyImage} alt="fighter" />
      </div>
    );
  } else if (which === "israel") {
    return (
      <div className="info-content-slide-fighter">
        <img src={israelImage} alt="fighter" />
      </div>
    );
  } else if (which === "jan") {
    return (
      <div className="info-content-slide-fighter">
        <img src={janImage} alt="fighter" />
      </div>
    );
  } else if (which === "jose") {
    return (
      <div className="info-content-slide-fighter">
        <img src={joseImage} alt="fighter" />
      </div>
    );
  } else if (which === "justin") {
    return (
      <div className="info-content-slide-fighter">
        <img src={justinImage} alt="fighter" />
      </div>
    );
  } else if (which === "max") {
    return (
      <div className="info-content-slide-fighter">
        <img src={maxImage} alt="fighter" />
      </div>
    );
  } else if (which === "sean") {
    return (
      <div className="info-content-slide-fighter">
        <img src={seanImage} alt="fighter" />
      </div>
    );
  }
};
const Promotion = ({ which }) => {
  if (which === "bella") {
    return (
      <div className="info-content-slide-bella">
        <img src={bellaImage} alt="promotions" />
      </div>
    );
  } else if (which === "cage") {
    return (
      <div className="info-content-slide-cage">
        <img className="cage-image" src={cageImage} alt="promotions" />
      </div>
    );
  } else if (which === "one") {
    return (
      <div className="info-content-slide-one">
        <img src={oneImage} alt="promotions" />
      </div>
    );
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default Info;

const Wrapper = styled.div`
  @media only screen and (max-width: 1099px) {
  }
  .social-link {
    text-decoration: none;
    cursor: pointer;
    color: white;
  }
  .info-body-main {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
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
  .info-content-small {
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
  .bubble-2 {
    background-color: #797979;
  }
  .bubble-3 {
    background-color: #797979;
  }
  .info-content-text {
    width: 571px;
    height: 430px;
    background-color: black;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    font-family: Roboto, sans-serif;
    font-weight: 200;
  }
  .info-content-text-small {
    width: 571px;
    height: 430px;
    background-color: black;
    border-radius: 50px;
    font-family: Roboto, sans-serif;
    font-weight: 200;
  }

  .image-slider {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    width: 450px;
    height: 430px;
    background-color: black;
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
  .info-content-paragraph-2-open {
    margin-top: 30px;
    margin-left: 40px;
    margin-right: 40px;
  }
  .info-content-paragraph-open {
    margin-top: 17px;
    margin-left: 40px;
    margin-right: 40px;
    line-height: 36px;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 100;
  }
  .image-div {
    margin-left: 225px;
    margin-top: 30px;
  }
  .info-content-paragraph-3 {
    margin-left: 40px;
    margin-right: 40px;
    color: rgba(255, 255, 255, 0.8);
  }

  .info-content-slide-bella img {
    height: 350px;
    width: 350px;
    border-radius: 50px;
    background-color: white;
  }

  .info-content-slide-cage {
    height: 350px;
    width: 350px;
    padding-top: 90px;
    border-radius: 50px;
    background-color: white;
  }
  .cage-image {
    height: 160px;
    width: 350px;
  }

  .info-content-slide-one img {
    height: 350px;
    width: 350px;
    border-radius: 50px;
    background-color: white;
  }

  .info-content-slide-fighter img {
    height: 403px;
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
  .icon:hover {
    color: #797979;
  }
  @media only screen and (max-width: 570px) {
    .info-content-text-small {
      width: 500px;
      height: 430px;
      background-color: black;
      border-radius: 50px;
      font-family: Roboto, sans-serif;
      font-weight: 200;
    }
    .image-div {
      margin: 0px;
      display: flex;
      justify-content: center;
    }
  }
  @media only screen and (max-width: 500px) {
    .info-content-text-small {
      width: 400px;
      height: 500px;
      background-color: black;
      border-radius: 50px;
      font-family: Roboto, sans-serif;
      font-weight: 200;
    }
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
      height: 700px;
    }
    .image-div {
      margin: 0px;
      display: flex;
      justify-content: center;
    }
    .info-content-paragraph {
      margin-top: 37px;
      margin-left: 40px;
      margin-right: 40px;
      margin-bottom: 40px;
      line-height: 36px;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 100;
    }
  }
`;
