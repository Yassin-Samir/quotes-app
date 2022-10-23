import Main from "./components/main";
import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Spiner from "./components/spinner";
import Id from "./components/id";
import "./css/index.css";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route
        path="/"
        loader={() => fetch("https://jsonplaceholder.typicode.com/users")}
        element={<Main />}
      />
      <Route
        path=":id"
        loader={async ({ params }) => {
          const { id } = params;
          return id <= 10 ? (
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          ) : (
            <p>Failed to load data</p>
          );
        }}
        element={<Id />}
      />
    </Fragment>
  )
);
function App() {
  return <RouterProvider router={router} fallbackElement={<Spiner />} />;
}

export default App;
