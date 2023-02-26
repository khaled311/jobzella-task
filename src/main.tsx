import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components";
import { store } from "./store/store";
import { Provider } from "react-redux";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "react-query";
import { getAccessTokenFromLocalStorage } from "./utils/localStorage";
import App from "./App";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/home/:id",
    element: <App />,
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
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
