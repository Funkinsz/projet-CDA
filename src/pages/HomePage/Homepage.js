import styles from "./Homepage.module.scss";
import { NavLink } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";
import image from "../../assets/image/affiche_concert.jpg";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div
        className={`${styles.content} content d-flex flex-column jcc aic p20`}>
        <div
          className={`${styles.groupecontent} d-flex flex-column nowrap flex-fill aic jcc`}>
          <h2 className={`d-flex aic ${styles.titles} p10`}>
            Les Organisateurs les mieux notés
          </h2>
          <div className={`${styles.groupCard} d-flex aic jcsb m10 p10`}>
            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DE L'ORGANISATEUR</h3>
              </span>
            </div>

            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DE L'ORGANISATEUR</h3>
              </span>
            </div>

            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DE L'ORGANISATEUR</h3>
              </span>
            </div>
          </div>

          <button className={`${styles.btnNav}`}>
            <NavLink className={"d-flex aic"} to={"/pros"}>
              Voir plus d'organisateurs
            </NavLink>
          </button>
        </div>

        <div className={`${styles.divider}`}></div>

        <div
          className={`${styles.groupecontent} d-flex flex-column nowrap flex-fill aic jcc`}>
          <h2 className={`d-flex aic ${styles.titles} p10`}>
            Les Groupes les mieux notés
          </h2>
          <div className={`${styles.groupCard} d-flex aic jcsb m10 p10`}>
            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DU GROUPE</h3>
              </span>
            </div>

            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DU GROUPE</h3>
              </span>
            </div>

            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DU GROUPE</h3>
              </span>
            </div>
          </div>

          <button className={`${styles.btnNav}`}>
            <NavLink className={"d-flex aic"} to={"/bands"}>
              Voir plus de groupes
            </NavLink>
          </button>
        </div>

        <div className={`${styles.divider}`}></div>

        <div
          className={`${styles.groupecontent} d-flex flex-column nowrap flex-fill aic jcc`}>
          <h2 className={`d-flex aic ${styles.titles} p10`}>
            Les Groupes les mieux notés
          </h2>
          <div className={`${styles.groupCard} d-flex aic jcsb m10 p10`}>
            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DE L'ARTISTE</h3>
              </span>
            </div>

            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DE L'ARTISTE</h3>
              </span>
            </div>

            <div className={`${styles.groupcontent} groupcontent`}>
              <div className={`${styles.img} d-flex jcc aic`}>
                <img src={image} alt="" />
              </div>
              <span className={`d-flex flex-fill aic jcc`}>
                <h3>NOM DE L'ARTISTE</h3>
              </span>
            </div>
          </div>

          <button className={`${styles.btnNav}`}>
            <NavLink className={"d-flex aic"} to={"/arts"}>
              Voir plus de musiciciens
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
