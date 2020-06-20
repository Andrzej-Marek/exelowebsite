import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import media from "./media";
import HomePage from "./components/HomePage/HomePage";
import Prices from "./components/Prices/Prices";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import ReactGA from "react-ga";
import Webasto from "./components/Webasto/Webasto";

ReactGA.initialize("UA-141582838-1");
ReactGA.pageview(window.location.pathname + window.location.search);

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700|PT+Serif:400,700&display=swap&subset=cyrillic-ext');

body {
  overflow-x: hidden;
  font-family: ${({ theme }) => theme.font.mont};
  background: ${({ theme }) => theme.color.background};
  color: white;
  margin: 0;
  width: 100vw;
}


h2 {
  font-size: 1.9rem;
  span {
    color: ${({ theme }) => theme.color.green};
  }
}
h3 {
  font-size: 22px;
  span {
    color: ${({ theme }) => theme.color.green};
  }
}

p {
  font-size: 14px;

  span {
    color: ${({ theme }) => theme.color.green};
  }
}

${media.tablet`

h2 {
  font-size: 42px;
}
h3 {
  font-size: 28px;
}

p {
  font-size: 16px;
}
`}
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle whiteColor />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/cennik" component={Prices} />
          <Route exact path="/kontakt" component={Contact} />
          <Route exact path="/onas" component={AboutUs} />
          <Route exact path="/ogrzewania" component={Webasto} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
