import React from "react";

interface IErrorMessage {
  message: string | undefined;
}

const ErrorMessage = ({ message }: IErrorMessage) => {
  if (!message) return null;
  return (
    <p
      className="text-xs text-red-600 py-1 mt-0"
      data-testId="messageContainer"
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
