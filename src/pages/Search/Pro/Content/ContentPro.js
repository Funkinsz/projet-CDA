import styles from "./ContentPro.module.scss";
import image from "../../../../assets/image/affiche_concert.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Slider from "@mui/material/Slider";
import style from "./SidebarPro.module.scss";

export default function ContentPro() {
  const { ads } = useContext(AuthContext);

  const price = ads.map((a) => a.price_ad_pro); // On définit un tableau des prix des annonce

  // On définit le prix mini et maxi pour l'envoyé dans le Slider (filtre de prix)
  const min = Math.min(...price);
  const max = Math.max(...price);

  const [range, setRange] = useState([min, max]); // on récupère les prix mini et maxi dans un useState

  function handleChanges(e, newValue) {
    setRange(newValue); // cette fonction prend la valeure du slider et modifie le useState
  }

  const [sono, setSono] = useState(0); // Initialise la valeur du filtre sono a 0

  // Swap la valeur de 0 a 1 et inversemment après avoir cochet l'input checkbox
  const handleSono = () => {
    if (sono === 0) {
      setSono(1);
    } else {
      setSono(0);
    }
  };

  const nmb_art = ads.map((a) => a.number_art); // récupère un tableau du nombre d'artiste des annonces
  const sort = nmb_art.sort((b, a) => a - b); // affiche dans l'ordre décroissant le tableau précédent

  const maxArt = Math.max(...nmb_art);

  const [numberArt, setNumberArt] = useState(maxArt); // Initialise la valeure par défaut au nombre le plus élevé

  function handleNumber(e) {
    setNumberArt(e.target.value); // Récupère la valeure selectionné dans le select lié au nombre d'artiste
  }

  console.log(numberArt);
  return (
    <section className={`${styles.section} section d-flex`}>
      <div className={`${style.absolute}`}>
        <div className={`${style.sidebar} sidebar d-flex flex-column aie p10`}>
          <div className={`${style.filter} filter search_bar d-flex p20 jce`}>
            <div className="search d-flex">
              <span className="d-flex aic">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filtre"
              />
            </div>
          </div>
          <div className={`${style.filter} p20`}>
            <span className="d-flex jce aic">
              Style :
              <select className="p5">
                <option value=""></option>
              </select>
            </span>
          </div>
          <div className={`${style.filter} p20`}>
            <span className="d-flex jce aic">
              Sono :
              <input onChange={handleSono} type="checkbox" />
            </span>
          </div>
          <div className={`${style.filter} p20`}>
            <span className="d-flex jce">
              Prix de {range[0]} à {range[1]} €
            </span>
            <div className={`${style.rangeslider} d-flex jce`}>
              <Slider
                className={`${style.slider}`}
                onChange={handleChanges}
                value={range}
                defaultValue={[range[0], range[1]]}
                min={min} // prix mini du contenu
                max={max} // prix maxi du contenu
              />
            </div>
          </div>
          <div className={`${style.filter} p20`}>
            <span className="d-flex jce aic">
              Maximum de personne :
              <select onChange={handleNumber} className="p5">
                {sort && sort.map((a) => <option>{a}</option>)}
              </select>
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.content} d-flex flex-column aic p10`}>
        {ads &&
          ads.map(
            (a, i) =>
              // on créé des condition en lien avec les filtres précédent pour rendre le contenu dynamique
              a.price_ad_pro >= range[0] &&
              a.price_ad_pro <= range[1] &&
              (sono === 0 || a.sono === sono) &&
              a.number_art <= numberArt && (
                <div
                  className={`${styles.groupcontent} groupcontent d-flex jcsb m20`}>
                  <div className={`${styles.img} d-flex jcc aic`}>
                    <img src={image} alt="" />
                    <span className={`${styles.price}`}>
                      {a.price_ad_pro} €
                    </span>
                  </div>
                  <div className={`${styles.desc} d-flex flex-column p10`}>
                    <h2>{a.title_ad_pro}</h2>
                    <span>{a.content_ad_pro}</span>
                  </div>
                  <div className="d-flex aic jcc">
                    <span className={`${styles.divider}`}></span>
                  </div>
                  <ul className={`${styles.sono} d-flex flex-column jce`}>
                    <li>musicien : {a.number_art}</li>
                    <li>{a.sono == true ? "Sono : ✔️" : "Sono : ❌"}</li>
                  </ul>
                </div>
              )
          )}
      </div>
    </section>
  );
}
