import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from './../../core/routerConfig';

function MainLayout({ children,routes }) {
  return (
    <>
      <Header />

        <Switch>
          {
            routes.map((route,i) => (
              <RouteWithSubRoutes key={i} {...route}/>
              ))
          }
        </Switch>

      <Footer />
    </>
  );
}

export default MainLayout;
