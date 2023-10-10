import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error404 from "./components/Error404.jsx";

const App = lazy(() => import("./App.jsx"));
const ContactUs = lazy(() => import("./Screens/ContactUs.jsx"));
const LandingPageLayout = lazy(() =>
  import("./components/LandingPageLayout.jsx"),
);
const AboutMe = lazy(() => import("./Screens/AboutMe.jsx"));
const Projects = lazy(() => import("./Screens/Projects.jsx"));
const ProjectDetails = lazy(() => import("./Screens/ProjectDetails.jsx"));

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
      {
        path: "/project",
        element: <Projects />,
      },
      {
        path: "/project/:projectName",
        element: <ProjectDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  </Provider>,
);
