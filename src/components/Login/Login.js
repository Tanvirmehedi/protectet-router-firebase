import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div className="my-2">
      <button
        onClick={() => signInWithGoogle()}
        className="border px-2 py-1 rounded-md text-slate-700 bg-slate-300 font-bold"
      >
        Continue With Google
      </button>
    </div>
  );
};

export default Login;
