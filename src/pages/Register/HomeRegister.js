import { useContext } from "react";
import Topbar from "../Topbar/Topbar";
import styles from "./Register.module.scss";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../context";
import pro1 from "../../assets/image/Img register/pro1.webp"
import pro2 from "../../assets/image/Img register/pro2.webp"
import pro3 from "../../assets/image/Img register/pro3.jpeg"
import pro4 from "../../assets/image/Img register/pro4.jpeg"
import pro5 from "../../assets/image/Img register/pro5.jpeg"
import perso1 from "../../assets/image/Img register/perso1.webp"
import perso2 from "../../assets/image/Img register/perso2.jpeg"
import perso3 from "../../assets/image/Img register/perso3.jpeg"
import perso4 from "../../assets/image/Img register/perso4.jpeg"
import perso5 from "../../assets/image/Img register/perso5.webp"

export default function HomeRegister() {
  const { user } = useContext(AuthContext);

  const random1 = Math.floor(Math.random() * 5)
  const random2 = Math.floor(Math.random() * 5)

  const pro = [
    pro1,
    pro2,
    pro3,
    pro4,
    pro5,
  ]

  const perso = [
    perso1,
    perso2,
    perso3,
    perso4,
    perso5,
  ]

  return (
    <>
      {user ? (
        <Navigate to="/profile" />
      ) : (
        <>
          <Topbar />
          <div className={`${styles.content} d-flex flex-fill aic jcse m20`}>
            <NavLink to="/register-perso">
              <div className={`${styles.card} d-flex flex-column aic jcc card`}>
                <img src={`${perso[random1]}`} alt="" />
                <h2>ARTISTE</h2>
              </div>
            </NavLink>
            <NavLink to="/register-pro">
              <div className={`${styles.card} d-flex flex-column aic jcc card m20`}>
                <img src={`${pro[random2]}`} alt="" />
                <h2>ORGANISATEUR</h2>
              </div>
            </NavLink>
          </div>
        </>
      )}
    </>
  );
}
