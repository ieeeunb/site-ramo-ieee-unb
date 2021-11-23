import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled, { css } from "styled-components";

import slide1 from "../images/slide-1.png";
import slide2 from "../images/slide-2.png";
import slide3 from "../images/slide-3.png";
import Abstract from "./Abstract";

const ActiveSlide = styled.div`
  border-radius: 100%;
  position: relative;
  width: 20em;
  height: 20em;
  box-shadow: 5px 5px 20px 1px #afafaf;
  background-color: white;
  z-index: 2;
`;

const LeftSlide = styled.div`
  border-radius: 100%;
  width: 10em;
  height: 10em;
  position: relative;
  left: 5em;
  top: 10em;
  box-shadow: 5px 5px 20px 1px #afafaf;
  z-index: 1;
`;

const RightSlide = styled.div`
  border-radius: 100%;
  width: 10em;
  height: 10em;
  position: relative;
  right: 5em;
  box-shadow: 5px 5px 20px 1px #afafaf;
  z-index: 1;
`;

const SlideShow = styled.div`
  display: flex;
  align-items: center;
`;

const HeroImages = styled.div`
  display: flex;
`;

const Hero = (props) => {
  const images = [slide1, slide2, slide3];

  const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <Carousel fade variant="dark" interval={2000}>
      <Carousel.Item>
        <SlideShow>
          <Abstract></Abstract>
          <HeroImages>
            <LeftSlide style={{ backgroundColor: "green" }} />
            <ActiveSlide
              style={{ backgroundColor: "red" }}
              src={images[2]}
              alt=""
            />
            <RightSlide style={{ backgroundColor: "blue" }} />
          </HeroImages>
        </SlideShow>
      </Carousel.Item>
      <Carousel.Item>
        <SlideShow>
          <Abstract></Abstract>
          <HeroImages>
            <LeftSlide style={{ backgroundColor: "red" }} />
            <ActiveSlide
              style={{ backgroundColor: "blue" }}
              src={images[2]}
              alt=""
            />
            <RightSlide style={{ backgroundColor: "green" }} />
          </HeroImages>
        </SlideShow>
      </Carousel.Item>
      <Carousel.Item>
        <SlideShow>
          <Abstract></Abstract>
          <HeroImages>
            <LeftSlide />
            <ActiveSlide
              style={{ backgroundColor: "green" }}
              src={images[2]}
              alt=""
            />
            <RightSlide />
          </HeroImages>
        </SlideShow>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
