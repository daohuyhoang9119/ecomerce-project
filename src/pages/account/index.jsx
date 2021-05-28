import React from "react";
import { Route, Switch, useRouteMatch, NavLink } from "react-router-dom";

import AccountAddress from "./components/AccountAddress";
import AccountInfo from "./components/AccountInfo";
import AccountOrders from "./components/AccountOrders";
import AccountPayment from "./components/AccountPayment";
import AccountWishlist from "./components/AccountWishlist";

function Account() {
  let { path } = useRouteMatch();

  console.log(path);
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3">
            {/* Nav */}
            <nav className="mb-10 mb-md-0">
              <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle active"
                  to={`${path}`}
                  exact
                >
                  Orders
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  to={`${path}/wisht-list`}
                >
                  Wishlist
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  to={`${path}/info`}
                >
                  Personal Info
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  to={`${path}/address`}
                >
                  Addresses
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle "
                  to={`${path}/payment`}
                >
                  Payment Methods
                </NavLink>
                <NavLink
                  className="list-group-item list-group-item-action dropright-toggle"
                  to={`#`}
                >
                  Logout
                </NavLink>
              </div>
            </nav>
          </div>
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <Switch>
              <Route path={`${path}/address`} component={AccountAddress} />
              <Route path={`${path}/info`} component={AccountInfo} />
              <Route path={`${path}/payment`} component={AccountPayment} />
              <Route path={`${path}/wisht-list`} component={AccountWishlist} />
              <Route component={AccountOrders} />
            </Switch>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Account;
