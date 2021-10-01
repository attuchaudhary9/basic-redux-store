import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route >404 Not Found </Route>
      </Switch>
      </Router>
    </div>
  );
};

export default App;
