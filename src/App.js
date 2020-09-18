import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UploadPage from './components/UploadPage'
import LandingPage from './components/LandingPage/LandingPage'
import DetailProductPage from './components/DetailProductPage/DetailProductPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/product" component={UploadPage} />
        <Route exact path="/product/:productId" component={DetailProductPage} />
      </Switch>
    </Router>
  );
}

export default App;
