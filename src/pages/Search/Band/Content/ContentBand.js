import styles from "./ContentBand.module.scss";
import image from "../../../../assets/image/affiche_concert.jpg";

export default function ContentBand() {
  return (
    <section className={`${styles.section} section d-flex`}>
      <div className={`${styles.content} d-flex flex-row wrap p10`}>
        <div
          className={`${styles.groupcontent} groupcontent d-flex flex-column m10`}>
          <div className={`${styles.img} d-flex jcc aic`}>
            <img src={image} alt="" />
          </div>
          <span className={`d-flex flex-fill aic jcc`}>
            <h3>NOM DU GROUPE</h3>
          </span>
        </div>
      </div>
    </section>
  );
}
