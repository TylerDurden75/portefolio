import { lazy, Suspense } from "react";
import styled from "styled-components";
import { mediaQueries } from "../components/Theme";
import { motion } from "framer-motion";

import { Technos } from "../data/TechnoData";
import TechnoComponent from "../components/TechnoComponent";
import Loading from "../components/Loading";
import MenuBox from "../components/MenuBox/MenuBox";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
// const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));

const MainContainer = styled(motion.div)`
  background-image: ${(props) => props.theme.body};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.9)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

  ${mediaQueries(30)`
    padding-top: 7rem;
  `};
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(2.5rem + 2vw);

  ${mediaQueries(50)`
    grid-template-columns: 100%;
  `};
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Techno = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        variants={container}
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <Container>
          <LogoComponent />
          <MenuBox />
          <SocialIcons />
          <Center>
            <Grid variants={container} initial="hidden" animate="show">
              {Technos.map((techno) => {
                return <TechnoComponent key={techno.id} techno={techno} />;
              })}
            </Grid>
          </Center>
        </Container>
      </MainContainer>
    </Suspense>
  );
};

export default Techno;
