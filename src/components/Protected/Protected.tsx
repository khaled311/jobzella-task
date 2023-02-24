import { Navigate } from "react-router-dom";

type Props = {
  children: any;
};

const Protected = ({ children }: Props) => {
  const userData =
    JSON.parse(sessionStorage.getItem("userData") as any) ||
    JSON.parse(localStorage.getItem("userData") as any);

  if (!userData?.data?.token) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;
