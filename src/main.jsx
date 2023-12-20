import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, { action, loader } from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {  Action, Loader } from "./routes/contact";
import EditContact, { EditAction } from "./routes/edit";
import { DestroyAction } from "./routes/destroy";
import Index from "./routes/index";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: loader,
    action: action,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: Loader,
        action: Action,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact></EditContact>,
        loader: Loader,
        action: EditAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: DestroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
      { index: true, element: <Index /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
