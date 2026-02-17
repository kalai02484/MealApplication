import { Spinner } from "flowbite-react";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <Spinner color="warning" aria-label="spinner" />
    </div>
  );
};

export default LoadingSpinner;
