import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/images/YoKo_Pic.jpg";
import hi from "../assets/audio/hi-cartoon-girl.wav";
import { JavaScript } from "./AllSvgs";
import { mediaQueries } from "./Theme";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 55vw; //65
  height: 45vh; //55
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(40)`
    width: 60vw;
  `};

  ${mediaQueries(30)`
    width: 70vw;
  `};

  ${mediaQueries(20)`
    width: 60vw;
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const SubBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    /* object-fit: cover; */
    width: 100%;
    height: 100%; //auto ?
  }

  ${mediaQueries(50)`
    width: 100%;
    height: 50%;
  `};
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  /* cursor: pointer; */

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(1.1rem + 1.5vw);
    font-weight: 300;

    ${mediaQueries(40)`
      font-size: calc(0.5rem + 1vw);
  `};
  }

  ${mediaQueries(40)`
    font-size: calc(0.5rem + 1.5vw);
  `};

  ${mediaQueries(20)`
    padding: 1rem;
  `};
`;

const Intro = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(true);
  const [height, setHeight] = useState("55vh");

  const handleMouseOver = (e) => {
    const title = document.getElementById("title");
    title.style.cursor = "grab";
  };

  const handleMouseDown = (e) => {
    const title = document.getElementById("title");
    title.style.cursor = "grabbing";
  };

  const handleMouseUp = (e) => {
    const title = document.getElementById("title");
    title.style.cursor = "grab";
  };

  useEffect(() => {
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);

  const handleClick = () => {
    setClick(true);

    if (click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 0.5 }}
    >
      <SubBox>
        <Text>
          <motion.h1
            id="title"
            drag
            dragConstraints={{
              left: -20,
              right: 250,
              top: -90,
              bottom: 50,
            }}
            onClick={() => handleClick()}
            style={{ display: "block" }}
          >
            Hi,
            <audio src={hi} ref={ref} />
          </motion.h1>
          <h3>I'm Thibault.</h3>
          <h6>
            Fullstack JavaScript Developer.
            <JavaScript style={{ position: "absolute", marginLeft: "20px" }} />
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <img src={Me} alt="Profile" className="pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
