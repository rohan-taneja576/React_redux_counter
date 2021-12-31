import classes from "./user-profile.module.css";

const UserProfile = () => {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  return (
    <main className={classes.profile}>
      <h2>
        Welcome {firstName} {lastName}
      </h2>
    </main>
  );
};

export default UserProfile;
