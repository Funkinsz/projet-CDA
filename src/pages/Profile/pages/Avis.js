import styles from "../Profile.module.scss";
import img from "../../../assets/image/Img register/perso1.webp";

export default function Avis() {
  return (
      <div className={`${styles.container_avis} d-flex flex-column`}>
        <div className={`${styles.card} d-flex m20`}>
          <div className={`${styles.img}`}>
            <img src={img} alt="" />
          </div>
          <div className={`${styles.content} d-flex flex-column`}>
            <div className={`${styles.ul}`}>
              <p>
                X.X / 5<i className="fa-solid fa-star"></i>
              </p>
            </div>
            <div className="d-flex flex-column">
              <p>VOICI MON AVIS</p>
            </div>
          </div>
        </div>
      </div>
  );
}
