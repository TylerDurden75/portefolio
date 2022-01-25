import React from "react";
import { mediaQueries } from "./Theme";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  width: 100%;
  height: 100%;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  overflow: hidden;

  position: absolute;
  left: calc(3.5rem + 3.5vw);
  top: 10rem;

  font-family: "Ubunto Mono", monospace;
  text-align: justify;

  ${mediaQueries(160)`
    width: 38vw;
    top:50%;
    height: 60vh;
    transform:translate(-50%,-50%);
    left:27%;
    font-size: 1.3em;
  `};

  ${mediaQueries(90)`
    width: 38vw;
    top:50%;
    transform:translate(-50%,-50%);
    left:30%;
    font-size: 1.20em;
  `};

  ${mediaQueries(75)`
    width: 38vw;
    top:50%;
    transform:translate(-50%,-50%);
    left:30%;
    font-size: 0.9em;
  `};

  ${mediaQueries(60)`
    width: 38vw;
    top:50%;
    transform:translate(-50%,-50%);
    left:30%;
    font-size: 0.9em;
  `};

  ${mediaQueries(40)`
    width: 60vw;
    top:50%;
    transform:translate(-50%,-50%);
    left:50%;
    font-size: 0.7em;
  `};

  ${mediaQueries(30)`
    top:45%;
    height: 50vh;
    transform:translate(-50%,-50%);
    margin-top:2rem;
    font-size: 0.8em;
  `};

  ${mediaQueries(25)`
    top:50%;
    height: 50vh;
    margin-top:2rem;
    font-size: 0.7em;
  `};
`;

const Description = () => {
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
    >
      Hi, I'm Thibault JEAN - a fullstack JavaScript developer based in Paris. I
      work essentially with a MERN stack: MongoDB, ExpressJS, React and NodeJS.{" "}
      <br />
      <br /> I do a lot of technology watch on the web3. I also trained as a
      Blockchain and Smart Contract (Solidity) developer, creation of
      decentralized applications at Alyra school. I am interested in 3D and VR
      too.
      <br />
      <br /> When I'm not behind my keyboard, I'm behind my turntables.
      <br />
      <br /> I like to share and contribute to the tech community for a less
      centralized and more open-source web.
    </Box>
  );
};

export default Description;
