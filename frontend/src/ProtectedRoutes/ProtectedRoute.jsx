import React from "react";
import { Navigate } from "react-router-dom";
import { UserData } from "../context/userContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth, loading } = UserData();

  if (loading) {
    // Optionally display a loader while checking authentication
    return <div>Loading...</div>;
  }

  // Check if the user is authenticated
  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return  children ;
};

export default ProtectedRoute;
