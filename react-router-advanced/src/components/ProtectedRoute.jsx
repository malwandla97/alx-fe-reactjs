import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = false; // Change this to simulate authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/" />;  // Redirect to the home page if not authenticated
  }

  return children;  // Render children if authenticated
};

export default ProtectedRoute;
