import React from "react";
import { useSendEmailVerification, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error?.message}
      </p>
    );
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      {errorElement}
      <button onClick={() => signInWithGoogle()}>Google SignIn</button>
    </div>
  );
};

export default SocialLogin;
