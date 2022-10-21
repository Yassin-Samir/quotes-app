import classes from "../css/main.module.css";
import { useLoaderData, Link } from "react-router-dom";
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
  return (
    <div className={classes.index}>
      <p className={classes.name}>{name}</p>
      <a href={`mailto:${email}`} className={classes.email}>
        {email}
      </a>
      <p>{website}</p>
      <Link to={`/${id}`} className={classes.details}>
        details
      </Link>
    </div>
  );
};
export default Main;
