import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Signup = () => {
  const { onGoogleAuth } = useFirebase();

  return (
    <div className="my-2">
      <button
        onClick={onGoogleAuth}
        className="border px-2 py-1 rounded-md text-slate-700 bg-slate-300 font-bold"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default Signup;
