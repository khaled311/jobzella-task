import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Home, Protected } from "./components";
import { store } from "./store/store";
import { Provider } from "react-redux";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { getAccessTokenFromLocalStorage } from "./utils/localStorage";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: (
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    ),
  },
  {
    path: "/home/:id",
    element: (
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    ),
  },
]);

axios.interceptors.request.use(
  async (config: any) => {
    const token = getAccessTokenFromLocalStorage();

    config.baseURL = "https://todo-api.jbz.la/api/";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
