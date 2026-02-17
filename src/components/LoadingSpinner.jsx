import { Spinner } from "flowbite-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="w-screen flex justify-center align-center py-50">
      <Spinner color="warning" aria-label="spinner" />
    </div>
  );
};

export default LoadingSpinner;
