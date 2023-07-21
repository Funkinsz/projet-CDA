import styles from "./ContentPro.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Slider from "@mui/material/Slider";
import style from "./SidebarPro.module.scss";
import Ads from "./page/Ads";
import NotFound from "./page/NotFound";

export default function ContentPro() {
  const { ads } = useContext(AuthContext);

  const [search, setSearch] = useState("");

  function handleInput(e) {
    const keyboardInput = e.target.value;
    setSearch(keyboardInput.trim().toLowerCase());
  }

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

  const mobileWidth = window.innerWidth < 718; // calcul la largeur de l'écran

  const [burger, setBurger] = useState("none");

  // switch le filtre de display none a flex
  function toggleBurger() {
    if (burger === "none") {
      setBurger("flex");
    } else {
      setBurger("none");
    }
  }

  console.log(ads);
  return (
    <section className={`${styles.section} section d-flex`}>
      <div className={`${style.absolute}`}>
        <span onClick={toggleBurger} className={`${style.burger}`}>
          <i className="fas fa-sliders"></i>
        </span>
        <div
          style={{ display: mobileWidth ? burger : "" }}
          className={`${style.sidebar} sidebar d-flex flex-column aie`}>
          <div className={`${style.filter} filter search_bar d-flex jce`}>
            <div className={`${style.search} search d-flex`}>
              <span className="d-flex aic">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filtre"
                onInput={handleInput}
              />
            </div>
          </div>
          <div className={`${style.filter}`}>
            <span className="d-flex jce aic">
              Style :
              <select className="p5">
                <option value=""></option>
              </select>
            </span>
          </div>
          <div className={`${style.filter}`}>
            <span className="d-flex jce aic">
              Sono :
              <input onChange={handleSono} type="checkbox" />
            </span>
          </div>
          <div className={`${style.filters}`}>
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
          <div className={`${style.filter}`}>
            <span className="d-flex jce aic">
              Maximum de personne :
              <select onChange={handleNumber} className="p5">
                {sort && sort.map((a, i) => <option>{a}</option>)}
              </select>
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.content} d-flex flex-column aic`}>
        {/* {ads && filterAds.length === 0 ? (
          <NotFound />
        ) : (
          filterAds.map(
            (a, i) =>
              // on créé des condition en lien avec les filtres précédent pour rendre le contenu dynamique
              a.price_ad_pro >= range[0] &&
              a.price_ad_pro <= range[1] &&
              (sono === 0 || a.sono === sono) &&
              a.number_art <= numberArt &&
               (
                <Ads key={i} ad={a} mobileWidth={mobileWidth} />
              )
          )
        )} */}
        {ads.filter(
          (a) =>
            a.title_ad_pro.toLowerCase().startsWith(search) &&
            a.price_ad_pro >= range[0] &&
            a.price_ad_pro <= range[1] &&
            (sono === 0 || a.sono === sono) &&
            a.number_art <= numberArt
        ).length ? (
          ads
            .filter(
              (a) =>
                a.title_ad_pro.toLowerCase().startsWith(search) &&
                a.price_ad_pro >= range[0] &&
                a.price_ad_pro <= range[1] &&
                (sono === 0 || a.sono === sono) &&
                a.number_art <= numberArt
            )
            .map((a, i) => <Ads key={i} ad={a} mobileWidth={mobileWidth} />)
        ) : (
          <NotFound />
        )}
      </div>
    </section>
  );
}
