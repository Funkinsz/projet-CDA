import styles from "./Carousel.module.scss";
import image from "../../assets/image/affiche_concert.jpg";

export default function Carousel() {
  return (
    <div className={`${styles.carousel} d-flex jcc`}>
      <div className={`${styles.left} d-flex`}>
        <button className={`${styles.right}`}>
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      <div className={`${styles.imgcar} d-flex flex-fill aic jcc`}>
        <img src={image} alt="" />
      </div>
      <div className={`${styles.right} d-flex`}>
        <button className={`${styles.right}`}>
          <i class="fa-solid fa-chevron-up"></i>
        </button>
      </div>
    </div>
  );
}
