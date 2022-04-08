import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, logMeOut } = useFirebase();
  return (
    <div>
      <nav className="my-3 flex justify-between items-center container mx-auto">
        <div>
          <span className="text-slate-500 font-bold">{user?.displayName}</span>
        </div>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/order">Order</Link>

          {user?.uid ? (
            <button
              className="bg-slate-500 px-2 uppercase cursor-pointer rounded-md text-slate-100"
              onClick={logMeOut}
            >
              Logout
            </button>
          ) : (
            <span>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
            </span>
          )}
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
