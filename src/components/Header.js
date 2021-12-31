import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/authActions";
import classes from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <h1>Redux Header</h1>
      {!isAuth && (
        <nav>
          <ul>
            <li>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button>Log In</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
      {isAuth && (
        <nav>
          <ul>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/counter">My Counter</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
