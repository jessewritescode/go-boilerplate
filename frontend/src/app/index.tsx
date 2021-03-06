/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSessionSlice } from 'session/slice/index';
import { Login } from './pages/Login/Loadable';
import { Home } from './pages/Home/Loadable';
import { RouteNotFound } from './pages/RouteNotFound/Loadable';
import { Signup } from './pages/Signup/Loadable';

export function App() {
  const { i18n } = useTranslation();
  useSessionSlice();

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route component={RouteNotFound} />
      </Switch>
    </BrowserRouter>
  );
}
