export const getAccessTokenFromLocalStorage = (): string | null => {
  const sessionData = JSON.parse(sessionStorage.getItem("userData") as any);
  if (sessionData) {
    return sessionData?.data?.token;
  }
  const userData = JSON.parse(localStorage.getItem("userData") as any);
  return userData?.data?.token;
};
