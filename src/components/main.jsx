import classes from "../css/main.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";
function Main() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <main className={classes.main}>
        {data.map((i) => (
          <Index
            name={i.name}
            website={i.website}
            email={i.email}
            id={i.id}
            key={i.id}
          />
        ))}
      </main>
    </>
  );
}
const Index = ({ name, website, email, id }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.index}>
      <p className={classes.name}>{name}</p>
      <a href={`mailto:${email}`} className={classes.email}>
        {email}
      </a>
      <a href={website} target="blank" className={classes.website}>
        {website}
      </a>
      <p onClick={() => navigate(`/${id}`)} className={classes.details}>
        details
      </p>
    </div>
  );
};
export default Main;
