import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNav() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link className={classes.link} to={"/"}>
              All MeetUps
            </Link>
          </li>
          <li>
            <Link className={classes.link} to={"/new"}>
              New MeetUps
            </Link>
          </li>
          <li>
            <Link className={classes.link} to={"/fav"}>
              My Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNav;
