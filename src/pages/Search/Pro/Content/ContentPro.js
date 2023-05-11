import styles from "./ContentPro.module.scss";
import image from "../../../../assets/image/affiche_concert.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

export default function ContentPro() {
  const { ads } = useContext(AuthContext);

  console.log(ads);

  return (
    <section className={`${styles.section} section d-flex`}>
      <div className={`${styles.content} d-flex flex-column aic p10`}>
        {ads &&
          ads.map((a, i) => (
            <div className={`${styles.groupcontent} groupcontent d-flex m20`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
                <span className={`${styles.price}`}>{a.price_ad_pro} €</span>
              </div>
              <div className={`d-flex flex-fill flex-column p10`}>
                <h2>{a.title_ad_pro}</h2>
                <span>{a.content_ad_pro}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
