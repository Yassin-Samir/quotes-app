import { createContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import classes from "../css/id.module.css";
export const context = createContext(classes.link);
function Id() {
  const data = useLoaderData();
  console.log(data);
  if (data.type == "p") return data;
  const { name, email, id } = data;
  return (
    <div className={classes.id}>
      <p className={classes.idp}>{id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Link to="/" className={classes.link}>
        Back to main page
      </Link>
    </div>
  );
}
export default Id;
