import { NavLink } from "react-router-dom";
import banner from "../../../assets/image/banner.jpeg";
import styles from "../Profile.module.scss";

export default function Head({ user, previewImage }) {
  return (
    <div className={`${styles.profileHeader} d-flex`}>
      <div
        className={`${styles.banner}`}
        style={{
          backgroundImage:
            user.banner_user === null ? `url("${banner}")` : user.banner_user,
        }}>
        <div className={`${styles.backdrop_filter} d-flex`}>
          <div className={`${styles.pp} d-flex aic jcc`}>
            {user.profile_picture === null ? (
              <div
                className={`${styles.group_icon} d-flex flex-column aic jcc`}>
                <span className={`${styles.default_profile} m30`}>
                  <i className="fa-regular fa-user"></i>
                </span>
                <span className={`${styles.upload}`}>
                  <i className="fa-solid fa-upload"></i>
                </span>
              </div>
            ) : (
              <>
                <span className={`${styles.default_profile} m30`}>
                  <img src={previewImage} alt="" />
                </span>
                <span className={`${styles.upload}`}>
                  <i className="fa-solid fa-upload"></i>
                </span>
              </>
            )}
          </div>
          <div className={`${styles.list} d-flex aic jcc p10`}>
            <ul className="d-flex flex-column ais jcc">
              <li>{user.city.toUpperCase()}</li>
              <li>{user.travel_time} Km</li>
              <li className="d-flex aic">
                <label>Singer</label>
                {user.singer === null ? (
                  <input className="m10" type="checkbox" />
                ) : (
                  <input className="m10" type="checkbox" checked />
                )}
              </li>
            </ul>
          </div>
          <span className={`${styles.surname} d-flex flex-fill aic jcc`}>
            <h1>{user.surname}</h1>
          </span>
          <div
            className={`${styles.group_end_icon} d-flex flex-column aie jcsb`}>
            <span className={`${styles.i}`}>
              <NavLink to="mybands" className="m10">
                <button className={`${styles.btn}`}>
                    Groupes
                </button>
              </NavLink>
              <NavLink to="myadds" className="m10">
                <button className={`${styles.btn}`}>
                    Annonces
                </button>
              </NavLink>
              <i className="fa-regular fa-envelope"></i>
              <i className="fa-solid fa-envelope"></i>
            </span>
            <span className={`${styles.up}`}>
              <i className="fa-solid fa-upload"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
