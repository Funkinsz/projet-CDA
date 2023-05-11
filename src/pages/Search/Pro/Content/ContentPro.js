import styles from "./ContentPro.module.scss";
import image from "../../../../assets/image/affiche_concert.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import Slider from "@mui/material/Slider";
import style from "./SidebarPro.module.scss";

export default function ContentPro() {
  const { ads } = useContext(AuthContext);

  const price = ads.map((a) => a.price_ad_pro);

  const min = Math.min(...price);
  const max = Math.max(...price);

  const [range, setRange] = useState([min, max]);

  console.log(range[1]);

  function handleChanges(e, newValue) {
    setRange(newValue);
    if (a > range[1] || a < range[0]) {
      !setView;
    }
  }

  const [view, setView] = useState(true);

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
              <input type="checkbox" />
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
                min={min}
                max={max}
              />
            </div>
          </div>
          <div className={`${style.filter} p20`}>
            <span className="d-flex jce aic">
              Nombre de personne :
              <select className="p5">
                <option value=""></option>
              </select>
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.content} d-flex flex-column aic p10`}>
        {ads &&
          ads.map(
            (a, i) =>
              view && (
                <div
                  className={`${styles.groupcontent} groupcontent d-flex m20`}>
                  <div className={`${styles.img} d-flex jcc aic`}>
                    <img src={image} alt="" />
                    <span className={`${styles.price}`}>
                      {a.price_ad_pro} €
                    </span>
                  </div>
                  <div className={`d-flex flex-fill flex-column p10`}>
                    <h2>{a.title_ad_pro}</h2>
                    <span>{a.content_ad_pro}</span>
                  </div>
                </div>
              )
          )}
      </div>
    </section>
  );
}
