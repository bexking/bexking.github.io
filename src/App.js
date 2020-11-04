import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Pages/JS/home";
import ProjectPage from "./Pages/JS/projectPage";
import Dreamy from "./Pages/JS/df";
import Displacement from "./Pages/JS/displacement";
import Dome from "./Pages/JS/dome";
import IncognitoBreathing from './Pages/JS/iB';
import Shakespeare from './Pages/JS/shakespeare';
import Hints from './Pages/JS/hints';
import CookNook from './Pages/JS/cookNook';
import About from './Pages/JS/about';
// import Work from '.Pages/JS/work';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        {/* <Route path="/work" component={Work} /> */}
        <Route path="/projects" component={ProjectPage} />
        <Route path="/dreamyfinder" component={Dreamy} />
        <Route path="/displacement" component={Displacement} />
        <Route path="/takeoutdome" component={Dome} />
        <Route path="/hintswithengoo" component={Hints} />
        <Route path="/incognitobreathing" component={IncognitoBreathing} />
        <Route path="/shakemojispeare" component={Shakespeare} />
        <Route path="/cooknook" component={CookNook} />
      </Router>
    </div>
  );
}

export default App;