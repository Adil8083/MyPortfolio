import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import ContactUs from "./Screens/ContactUs.jsx";
import Error404 from "./components/Error404.jsx";
import LandingPageLayout from "./components/LandingPageLayout.jsx";
import AboutMe from "./Screens/AboutMe.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
