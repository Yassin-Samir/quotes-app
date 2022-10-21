import { useLoaderData, Link } from "react-router-dom";
import classes from "../css/id.module.css";
function Id() {
  const data = useLoaderData();
  if (data.name) {
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
  } else return data;
}
export default Id;
