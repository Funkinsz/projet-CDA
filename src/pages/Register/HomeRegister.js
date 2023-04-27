import { useContext } from "react";
import Topbar from "../Topbar/Topbar";
import styles from "./Register.module.scss";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../context";

export default function HomeRegister() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <>
          <Topbar />
          <div className={`${styles.content} d-flex flex-fill aic jcse`}>
            <NavLink to="/register-perso">
              <div className={`${styles.card} d-flex flex-column card`}>
                <h2>PERSO</h2>
              </div>
            </NavLink>
            <NavLink to="/register-pro">
              <div className={`${styles.card} d-flex flex-column card`}>
                <h2>PRO</h2>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
}
