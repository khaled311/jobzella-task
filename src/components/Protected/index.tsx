import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isSignedIn: any;
  children: any;
};

const Protected = ({ isSignedIn, children }: Props) => {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
