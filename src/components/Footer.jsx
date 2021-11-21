import React from "react";
import styled from "styled-components";

import facebook from "../images/facebook-icon.svg";
import email from "../images/email-icon.svg";
import linkedin from "../images/linkedin-icon.svg";
import instagram from "../images/instagram-icon.svg";
import youtube from "../images/youtube-icon.svg";

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #303b42;
  color: #a4a4a4;
  padding: 0 7em;

  a {
    text-decoration: none;
    color: #a4a4a4;
  }

  a:active {
    color: #a4a4a4;
  }
`;

const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <p>© 2021 Ramo Estudantil IEEE UnB. Proudly powered by Sydney</p>
      <SocialNetworks>
        <a href="">Fale Conosco</a>
        <a href="">
          <img src={email} alt="Email do Ramo" />
        </a>
        <a href="">
          <img src={linkedin} alt="Linkedin do Ramo" />
        </a>
        <a href="">
          <img src={instagram} alt="Instagram do Ramo" />
        </a>
        <a href="">
          <img src={facebook} alt="Facebook do Ramo" />
        </a>
        <a href="">
          <img src={youtube} alt="Youtube do Ramo" />
        </a>
      </SocialNetworks>
    </StyledFooter>
  );
};

export default Footer;
