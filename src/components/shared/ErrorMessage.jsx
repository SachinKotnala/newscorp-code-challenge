import HomeLink from "./HomeLink";
import React from 'react'

const ErrorMessage = ({ error }) => {
  return (
    <>
      <div data-testid="error-message">
        <p>{error}</p>
      </div>
      <HomeLink />
    </>
  );
};

export default ErrorMessage;
