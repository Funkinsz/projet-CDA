import styles from "../ContentPro.module.scss";
import image from "../../../../../assets/image/affiche_concert.jpg";

export default function Ads({ ad, mobileWidth }) {
  return (
    <div className={`${styles.groupcontent} groupcontent d-flex jcsb`}>
      <div>
        <div className={`${styles.img} d-flex jcc aic`}>
          <img src={image} alt="" />
          <span className={`${styles.price}`}>{ad.price_ad_pro} €</span>
        </div>
        <div className="d-flex aic jcc">
          <span className={`${styles.divider}`}></span>
        </div>
        <ul
          style={{ display: mobileWidth ? "" : "none" }}
          className={`${styles.sono} d-flex flex-column jce`}>
          <li>musicien : {ad.number_art}</li>
          <li>{ad.sono == true ? "Sono : ✔️" : "Sono : ❌"}</li>
        </ul>
      </div>

      <div className={`${styles.desc} d-flex flex-column p10`}>
        <h2>{ad.title_ad_pro}</h2>
        <span>{ad.content_ad_pro}</span>
      </div>
      <div
        style={{ display: mobileWidth ? "none" : "" }}
        className="d-flex aic jcc">
        <span className={`${styles.divider}`}></span>
      </div>
      <ul
        style={{ display: mobileWidth ? "none" : "" }}
        className={`${styles.sono} d-flex flex-column jce`}>
        <li>musicien : {ad.number_art}</li>
        <li>{ad.sono == true ? "Sono : ✔️" : "Sono : ❌"}</li>
      </ul>
    </div>
  );
}
