import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import Signup from "./components/signup";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <Fragment>
      <Header />
      <Routes>
        {!isAuth && <Route path="/login" element={<Auth />} />}
        {isAuth && <Route path="/profile" element={<UserProfile />} />}
        <Route path="/counter" element={<Counter />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Fragment>
  );
}

export default App;
