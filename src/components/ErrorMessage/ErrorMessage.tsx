import React from "react";

type Props = {
  message: string | undefined;
};

const ErrorMessage = ({ message }: Props) => {
  return <p className="text-xs text-red-600 py-1 mt-0">{message}</p>;
};

export default ErrorMessage;
