import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="bg-slate-500 w-4/12 mx-auto my-9 text-slate-50 rounded-lg py-5">
      <div className="text-xl font-bold">
        Name Of User : {user ? user.displayName : "No data Found"}
      </div>
      <div>
        <img
          className="mx-auto rounded-md"
          src={user ? user.photoURL : "No Data"}
          alt={user?.displayName}
        />
      </div>
      <div>
        <h1>Email: {user?.email ? user?.email : "No Data Exist"}</h1>
      </div>
    </div>
  );
};

export default Home;
