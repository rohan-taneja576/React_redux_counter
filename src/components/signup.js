import { useState } from "react";
import classes from "./auth.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const signupHandler = (event) => {
    event.preventDefault();
    console.log(data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={signupHandler}>
          <div className={classes.control}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <button>Sign Up</button>
        </form>
      </section>
    </main>
  );
};

export default Signup;
