import styles from "../Profile.module.scss";

export default function Rate() {
  return (
    <div className={`${styles.rate} m20`}>
      <h2>Avis moyen :</h2>
      <div className={`${styles.ul}`}>
        <ul className="d-flex jcsb">
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
