import React from "react";
import { NavLink } from "react-router-dom";

const Logout = () => {
  return (
    <div
      className="flex items-center "
      style={{
        height: "100vh",
      }}
    >
      <div className=" col-12">
        <h4>You Have LogOut!</h4>
        <p>Need to Log in Again?</p>

        <a href="/auth/login" className="btn secondaryBg btn-sm" role="button">
          Login
        </a>
      </div>
    </div>
  );
};

export default Logout;
