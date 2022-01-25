import { Fragment, Suspense, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme";
import { AnimatePresence } from "framer-motion";

import Loading from "./components/Loading";

const Main = lazy(() => import("./pages/Main"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Techno = lazy(() => import("./pages/Techno"));
const WorkPage = lazy(() => import("./pages/Work"));
const Skills = lazy(() => import("./pages/Skills"));
const ErrorBoundary = lazy(() => import("./pages/ErrorBoundary"));
const SoundBar = lazy(() => import("./subComponents/SoundBar"));

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Suspense fallback={<Loading />}>
          <SoundBar />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/techno" component={Techno} />
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/skills" component={Skills} />
              <Route component={ErrorBoundary} />
            </Switch>
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
