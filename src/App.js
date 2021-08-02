import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// own compoents import
import Home from "./pages/home";

import Shop from "./pages/shop";
import Checkout from "./pages/checkout";
import About from "./pages/about";
import ShopCategory from "./pages/shopCategory";

// auth
import PayPal from "./components/paypal";
import Logout from "./components/logout";
import PasswordReset from "./components/auth/resetPassword";
import PasswordResetConfirm from "./components/auth/resetPasswordConfirm";
import Admin from "./pages/admin";
import CheckOutComponet from "./components/checkout/checkout";
import ThanksComponent from "./components/checkout/thanks";

import { connect } from "react-redux";
import { authCheck, checkAuthenticated } from "./reduxStore/actions/auth";
import Product from "./pages/product";

function App() {
  React.useEffect(() => {
    authCheck(false);
  }, [authCheck]);
  React.useEffect(() => {
    checkAuthenticated();
  }, [checkAuthenticated]);

  return (
    <div className="App ">
      <Router>
        <Switch>
          {/* auth */}
          <Route path="/logout" exact component={Logout} />
          <Route path="/auth/password-reset" exact component={PasswordReset} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={PasswordResetConfirm}
          />
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:category" exact component={ShopCategory} />
          <Route path="/product/:name" exact component={Product} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/about" exact component={About} />
          <Route path="/adress" component={CheckOutComponet} />
          <Route path="/ordering-report" exact component={ThanksComponent} />
          <Route path="/orders" exact component={Admin} />
          <Route path="/paypal" exact component={PayPal} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  is_authenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  token: state.auth.token,
});

export default connect(mapStateToProps, { authCheck, checkAuthenticated })(App);
