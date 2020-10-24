import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import landingPage from './pages/LandingPage';
import "./assets/scss/style.scss";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={landingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
