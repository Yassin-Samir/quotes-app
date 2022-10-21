import classes from "../css/404.module.css";
import { Link } from "react-router-dom";
const error = () => (
  <div className={classes.errorDiv}>
    <p className={classes.error}>404</p>
    <Link to={"/"} className={classes.mainPageLink}>
      Back to main page
    </Link>
  </div>
);
export default error;
