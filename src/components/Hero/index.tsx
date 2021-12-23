import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { FaDribbble, FaLinkedinIn, FaGithub } from "react-icons/fa";

const HeroTitle = styled.h1`
  font-size: 2em;

  @media (min-width: 768px) {
    font-size: 4em;
  }

  @media (min-width: 1128px) {
    font-size: 5.4em;
  }
`;

const Highlight = styled.span`
  padding: 0;
  margin: 0;
  color: #c32319;
`;

const SocialList = styled.ul`
  display: flex;
  margin-top: 16px;

  li {
    margin-right: 16px;
    color: #a8a8a8;
    font-size: 1.8em;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.15);
      color: #c32319;
    }
  }
`;

const Hero: React.FC = (props) => {
  return (
    <Container>
      <HeroTitle>
        Web Developer, front-end enthusiast and motorcycle lover. I’m Alan
        Siqueira<Highlight>.</Highlight>
      </HeroTitle>

      <SocialList>
        <a target="blank" href="https://dribbble.com/alansiqueira">
          <li>
            <FaDribbble />
          </li>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/alanpsiqueira/">
          <li>
            <FaLinkedinIn />
          </li>
        </a>
        <a target="blank" href="https://github.com/alansiq">
          <li>
            <FaGithub />
          </li>
        </a>
      </SocialList>
    </Container>
  );
};

export default Hero;
