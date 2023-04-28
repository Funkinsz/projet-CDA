import styles from "./SidebarPro.module.scss";
import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function SidebarPro() {
  const [range, setRange] = useState([0, 1000]);

  function handleChanges(e, newValue) {
    setRange(newValue);
  }

  console.log(range);
  return (
    <div className={`${styles.absolute}`}>
      <div className={`${styles.sidebar} sidebar d-flex flex-column aie p10`}>
        <div className={`${styles.filter} filter search_bar d-flex p20 jce`}>
          <div className="search d-flex">
            <span className="d-flex aic">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" name="filter" id="filter" placeholder="Filtre" />
          </div>
        </div>
        <div className={`${styles.filter} p20`}>
          <span className="d-flex jce aic">
            Style :
            <select className="p5">
              <option value=""></option>
            </select>
          </span>
        </div>
        <div className={`${styles.filter} p20`}>
          <span className="d-flex jce aic">
            Sono :
            <input type="checkbox" />
          </span>
        </div>
        <div className={`${styles.filter} p20`}>
          <span className="d-flex jce">
            Prix de {range[0]} à {range[1]} €
          </span>
          <div className={`${styles.rangeslider} d-flex jce`}>
            <Slider
              className={`${styles.slider}`}
              onChange={handleChanges}
              value={range}
              defaultValue={[range[0], range[1]]}
              min={0}
              max={1000}
            />
          </div>
        </div>
        <div className={`${styles.filter} p20`}>
          <span className="d-flex jce aic">
            Nombre de personne :
            <select className="p5">
              <option value=""></option>
            </select>
          </span>
        </div>
      </div>
    </div>
  );
}
