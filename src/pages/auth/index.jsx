import React from "react";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

function Auth() {
  const auth = useSelector((state) => state.auth);
  // if (auth.login) return <Redirect to="/" />;

  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <LogIn />
          <Register />
        </div>
      </div>
    </section>
  );
}

export default Auth;
