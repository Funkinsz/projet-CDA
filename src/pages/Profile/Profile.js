import { useContext } from "react";
import styles from "./Profile.module.scss";
import { AuthContext } from "../../context/AuthContext";
import pp from "../../assets/image/Img register/pro4.jpeg";
import banner from "../../assets/image/Img register/perso4.jpeg";

export default function Profile() {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <section className={`flex-fill d-flex jcc p30`}>
      <div className={`${styles.profileContainer} d-flex jcc`}>
        <div className={`${styles.profileHeader} d-flex flex-fill`}>
          <div
            className={`${styles.banner} d-flex jcsb`}
            style={{ backgroundImage: `url("${banner}")` }}
          >
            <div className={`${styles.pp} d-flex aic jcc`}>
              <img src={pp} alt="" />
            </div>
            <span className={`${styles.surname} d-flex flex-fill aic jcc`}>
              <h1>{user.surname}</h1>
            </span>
            <span className={`${styles.i}`}>
              <i class="fa-regular fa-envelope"></i>
              <i class="fa-solid fa-envelope"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
