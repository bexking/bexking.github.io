import React from 'react';
import './App.css';
import { Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/JS/home";
import Contact from "./Pages/JS/contact";
import ContactSuccess from './Pages/JS/contact-success.js';
import ProjectPage from "./Pages/JS/projectPage";
import AcDf from "./Pages/JS/acDf";
import Displacement from "./Pages/JS/displacement";
import IncognitoBreathing from './Pages/JS/iB';
import Shakespeare from './Pages/JS/shakespeare';
import Hints from './Pages/JS/hints';
import CookNook from './Pages/JS/cookNook';
import About from './Pages/JS/about';
import Work from './Pages/JS/work';
import Nav from './Components/JS/nav2';
import { createBrowserHistory } from "history";
import { wrapHistory } from "oaf-react-router";
import NotFoundMsg from "./Pages/JS/404";
import Rm from "./Pages/JS/rm";
import Business from './Pages/JS/business.js';
import iilBooking from './Pages/JS/iil-booking.js';
import screenInvReview from './Pages/JS/screen.js';
import Pec from './Pages/JS/pec.js';
import ScReview from './Pages/JS/sc-review.js';
import banking from './Pages/JS/banking.js';

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
          <Route path="/contact" component={Contact} />
          <Route path="/contactsuccess" component={ContactSuccess} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/acdreamyfinder" component={AcDf} />
          <Route path="/displacement" component={Displacement} />
          <Route path="/hintswithengoo" component={Hints} />
          <Route path="/incognitobreathing" component={IncognitoBreathing} />
          <Route path="/shakemojispeare" component={Shakespeare} />
          <Route path="/cooknook" component={CookNook} />
          <Route path="/remindmat" component={Rm}/>
          <Route path="/businessecosystem" component={Business}/>
          <Route path="/sc-review" component={ScReview}/>
          <Route path="/pec" component={Pec}/>
          <Route path="/booking" component={iilBooking}/>
          <Route path="/screen-investment-review" component={screenInvReview} />
          <Route path="/banking" component={banking} />
          <Route component={NotFoundMsg}/>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
