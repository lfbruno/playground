import React from 'react';
import './App.css';
// CURRENT FILE
import Main from './_pieces';
// END CURRENT FILE
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import "./libraries/fontAwesomeLib";

function App() {
  return (
    <Router>
        <header className="text-center">
            <h1 className="text-topic font-weight-bold text-p">
                Playground
            </h1>
            <p className="ml-5 text-left text-title text-s">Quick testing front-end functionalities</p>
        </header>
        <Main />
        <br />
        <br />
        <footer>
            <p className="text-helper">*This app should be cleaned up after every end of testing. Move to either the gallery folder or your project when finish a project </p>
        </footer>
    </Router>
  );
}

export default App;
