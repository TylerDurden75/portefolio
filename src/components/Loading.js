import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Karla", sans-serif;

  overflow: hidden;
`;

const Loading = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let time = setTimeout(() => setShow(true), 300);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <Fragment>
      {show && (
        <Box>
          <h1>Loading...</h1>
        </Box>
      )}
    </Fragment>
  );
};

export default Loading;
