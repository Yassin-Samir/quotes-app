import { createContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import classes from "../css/id.module.css";
export const context = createContext(classes.link);
function Id() {
  const data = useLoaderData();
  const navigate = useNavigate();
  console.log(data);
  if (data.type == "p") return data;
  const { title, body, id } = data;
  return (
    <div className={classes.id}>
      <p className={classes.idp}>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <p
        onClick={() => {
          navigate("/");
        }}
        className={classes.link}
      >
        Back to main page
      </p>
    </div>
  );
}
export default Id;
