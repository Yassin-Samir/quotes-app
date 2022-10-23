import Main from "./components/main";
import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Spiner from "./components/spinner";
import Id from "./components/id";
import "./css/index.css";
import Error from "./components/404";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        loader={() => fetch("https://jsonplaceholder.cypress.io/users")}
        element={<Main />}
      />
      <Route
        path=":id"
        loader={({ params }) => {
          const { id } = params;
          return id <= 10 ? (
            fetch(`https://jsonplaceholder.cypress.io/users/${id}`)
          ) : (
            <Navigate replace to="/404" />
          );
        }}
        element={<Id />}
      />
      <Route path="/404" element={<Error />} />
    </Fragment>
  )
);
function App() {
  return <RouterProvider router={router} fallbackElement={<Spiner />} />;
}

export default App;
