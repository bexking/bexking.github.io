import React from 'react';
import './App.css';
import { Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/JS/home";
import ProjectPage from "./Pages/JS/projectPage";
import AcDf from "./Pages/JS/acDf";
import Displacement from "./Pages/JS/displacement";
import Dome from "./Pages/JS/dome";
import IncognitoBreathing from './Pages/JS/iB';
import Shakespeare from './Pages/JS/shakespeare';
import Hints from './Pages/JS/hints';
import CookNook from './Pages/JS/cookNook';
import About from './Pages/JS/about';
import Work from './Pages/JS/work';
import Well from './Pages/JS/well';
import Nav from './Components/JS/nav2';
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import ContactFooter from './Components/JS/contact-footer';
import NotFoundMsg from "./Pages/JS/404";
import Rm from "./Pages/JS/rm";
import SeeMore from "./Components/JS/see-more.js"
import NotFound from './Pages/JS/404';
import Business from './Pages/JS/business.js';

function App() {
  const settings = {
    shouldHandleAction: (previousLocation, nextLocation, action) => true,
    disableAutoScrollRestoration: true,
    announcePageNavigation: true,
    setPageTitle: false,
    handleHashFragment: true,
    restorePageStateOnPop: true,
    primaryFocusTarget: 'body',
    smoothScroll: false
  }

  const history = createBrowserHistory();
  wrapHistory(history, settings);

  return (
    <div className="App">
      <Router history={history}>
        <Nav />
        <Switch>
          <Route path="/(home|)" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/acdreamyfinder" component={AcDf} />
          <Route path="/displacement" component={Displacement} />
          <Route path="/takeoutdome" component={Dome} />
          <Route path="/hintswithengoo" component={Hints} />
          <Route path="/incognitobreathing" component={IncognitoBreathing} />
          <Route path="/shakemojispeare" component={Shakespeare} />
          <Route path="/cooknook" component={CookNook} />
          <Route path="/remindmat" component={Rm}/>
          <Route path="/wellwellwell" component={Well}/>
          <Route path="/businessecosystem" component={Business}/>
          <Route component={NotFoundMsg}/>
        </Switch>
        <ContactFooter />
      </Router>
    </div>
  );
}

export default App;
