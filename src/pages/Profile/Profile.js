import { useContext } from "react";
import styles from "./Profile.module.scss";
import { AuthContext } from "../../context/AuthContext";
import pp from "../../assets/image/Img register/pro4.jpeg";

export default function Profile() {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <section className={`flex-fill d-flex jcc p30`}>
      <div className={`${styles.profileContainer} d-flex jcc`}>
        <div className={`${styles.profileHeader} d-flex flex-fill`}>
          <div className={`${styles.banner} d-flex jcsb`}>
            <div className={`${styles.pp} d-flex aic jcc`}>
              <img src={pp} alt="" />
            </div>
            <img src={pp} alt="" />
            <h1>{user.surname}</h1>
            <div>icon messenger</div>
          </div>
        </div>
      </div>
    </section>
  );
}
