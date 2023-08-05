import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import Root, { rootLoader } from "./routes/root";
import App from "./App"
import Home from "./component/Home"
// import Team, { teamLoader } from "./routes/team";
import { StateProvider } from "./context/stateProvider";
import reducer, { initialState } from "./context/reducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    
  },
  {
    path: "/Home",
    element: <Home />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <RouterProvider router={router} />
  </StateProvider>
);