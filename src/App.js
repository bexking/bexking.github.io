import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Pages/JS/home";
import ProjectPage from "./Pages/JS/projectPage";

function App() {
  return (
    <div className="App">
      

      <Router>
        <Route path="/home" component={Home} />
        <Route path="/projects" component={ProjectPage} />
      </Router>
    </div>
  );
}

export default App;
