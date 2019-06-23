import React from 'react';
import './css/App.css';
import { Provider } from "react-redux";
import configureStore from "./Store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ShopContainer from './containers/ShopContainer';
import CartContainer from './containers/CartContainer';
import PaymentContainer from './containers/PaymentContainer';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const reduxStore = configureStore();


function App() {
  return (
    <Provider store={ reduxStore }>
      <Router>
        <div className="App">
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid item sm={8} xs={12} align="left">
                <Route path="/" exact component={ ShopContainer } />
                <Route path="/payment" component={ PaymentContainer } />
              </Grid>
              <Grid item sm={4} xs={12}>
                <CartContainer />
              </Grid>
            </Grid>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;