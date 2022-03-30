import React from 'react';
import Signin from './accountmanagment/Signin';
import ForgotPassword from './accountmanagment/ForgotPassword.js';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './accountmanagment/PrivateRoute';
import RestaurantAdmin from './restaurant-admin/RestaurantAdmin';
import RestaurantFront from './restaurant-front/RestaurantFront';

// Initialise firebase app

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/signin" component={Signin} />
            <Route path="/forgot-password" component={ForgotPassword} />
            {/* <PrivateRoute
              path="/restaurant-details"
              component={RestaurantAdmin}
            /> */}
            <Route path="/restaurant-details" component={RestaurantAdmin} />
            <Route path="/" component={RestaurantFront} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
