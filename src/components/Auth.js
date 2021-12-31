import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../store/actions/authActions";
import classes from "./auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    console.log(email, password);

    if (email === loginData.email && password === loginData.password) {
      dispatch(login());
      navigate("/profile");
    } else {
      return <p>Username and password doesn't match...</p>;
    }
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={loginData.email}
              onChange={(e) =>
                setLoginData({ ...loginData, email: e.target.value })
              }
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
