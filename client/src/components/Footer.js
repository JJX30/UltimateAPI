import React from "react"
import styled from "styled-components"
import { AiOutlineFacebook } from "react-icons/ai"
import { VscTwitter } from "react-icons/vsc"
import { RiInstagramLine } from "react-icons/ri"
import { AiOutlineLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"

const Footer = () => {
  return (
    <Wrapper>
      <div className="body">
        <footer>
          <div className="footer-div-1">
            <div className="footer-logo">
              <p className="footer-logo-heading">UltimateAPI</p>
              <p className="footer-logo-content">for UFC fighters and stats</p>
            </div>
            <div className="footer-socials">
              <p className="footer-socials-heading">socials</p>
              <div className="footer-socials-icons">
                <AiOutlineFacebook size={40}></AiOutlineFacebook>
                <VscTwitter size={40}></VscTwitter>
                <RiInstagramLine size={40}></RiInstagramLine>
                <AiOutlineLinkedin size={40}></AiOutlineLinkedin>
                <AiFillGithub size={38}></AiFillGithub>
              </div>
            </div>
          </div>
          <div className="footer-div-2">
            <div className="footer-terms">
              <p className="footer-terms-heading">terms & conditions</p>
              <p className="footer-terms-content">
                Terms and conditions of sale<br></br>Privacy policy<br></br>
                Website terms and conditions
              </p>
            </div>
            <div className="footer-built">
              <p className="footer-built-heading">built with</p>
              <p className="footer-built-content">
                Gatsby<br></br>Express<br></br>MongoDB
              </p>
            </div>
          </div>
          <div className="footer-div-3">
            <div className="footer-about">
              <p className="footer-about-heading">about us</p>
              <p className="footer-about-content">
                UltimateAPI is made for developers and mma fans that have been
                yearning for a deep, functional, and comprehensive, mma api
                since 2018. So we made one! For each fighter in the UFC,
                UltimateAPI provides accurate and fast data for your project.
                Headquarters in Miami, FL USA.
              </p>
            </div>
            <div className="footer-contact">
              <p className="footer-contact-heading">contact us</p>
              <p className="footer-contact-content">
                mauriciodelcas30@gmail.com<br></br>m.delcastillo@ufl.edu
                <br></br>
                (305)-713-6206
              </p>
            </div>
          </div>
        </footer>
        <div className="footer-copyright">
          <p>@ 2021 UltimateAPI ® All rights reserved</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
  footer {
    padding-top: 79px;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-family: Roboto, sans-serif;
    color: white;
  }
  .body {
    height: 537px;
    background-color: black;
  }
  .footer-copyright {
    margin-left: 41px;
    color: white;
    font-weight: 100;
    font-family: Roboto, sans-serif;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }
  .footer-div-1 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 281px;
    width: 269px;
  }

  .footer-div-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 226px;
    height: 386px;
  }

  .footer-div-3 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 427px;
    height: 386px;
  }
  .footer-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer-logo-heading {
    font-size: 48px;
    margin: 0px;
    font-weight: 500;
  }
  .footer-logo-content {
    font-size: 18px;
    margin: 0;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }

  .footer-terms {
    width: 226px;
    height: 163px;
  }
  .footer-terms-content {
    font-weight: 300;
    font-size: 14px;
    line-height: 200%;

    color: rgba(255, 255, 255, 0.6);
  }
  .footer-about {
    width: 427px;
    height: 163px;
  }
  .footer-about-content {
    font-weight: 300;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 200%;
  }

  .footer-socials {
    width: 268px;
    height: 80px;
  }

  .footer-socials-heading {
    margin-top: 0px;
  }

  .footer-built-content {
    font-weight: 300;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 200%;
  }
  .footer-contact-content {
    font-weight: 300;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 200%;
  }
  .footer-socials-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`
