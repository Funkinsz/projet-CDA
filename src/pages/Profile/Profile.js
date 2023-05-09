import { useContext } from "react";
import styles from "./Profile.module.scss";
import { AuthContext } from "../../context/AuthContext";
import pp from "../../assets/image/Img register/pro4.jpeg";
import banner from "../../assets/image/banner.jpeg";
import { Checkbox } from "@mui/material";

export default function Profile() {
  const { user } = useContext(AuthContext);

  // if (user.banner === null) {
  //   user.banner = "grey"
  // }

  // if (user.profile_picture === "") {
  //   user.profile_picture = "grey"
  // }

  console.log(user);
  return (
    <section className={`flex-fill d-flex jcc p30`}>
      <div className={`${styles.profileContainer} d-flex jcc`}>
        <div className={`${styles.profileHeader} d-flex flex-fill`}>
          <div
            className={`${styles.banner}`}
            style={{
              backgroundImage:
                user.banner_user === null
                  ? `url("${banner}")`
                  : user.banner_user,
            }}>
            <div className={`${styles.backdrop_filter} d-flex jcsb`}>
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
                    <img src={user.profile_picture} alt="" />
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
                  <li>
                    <label>Singer</label>
                    {
                      user.singer === null ? (
                        <input className="m10" type="checkbox" />
                      ) : (
                        <input className="m10" type="checkbox" checked />
                      )
                    }
                  </li>
                </ul>
              </div>
              <span className={`${styles.surname} d-flex flex-fill aic jcc`}>
                <h1>{user.surname}</h1>
              </span>
              <div
                className={`${styles.group_end_icon} d-flex flex-column aie jcsb`}>
                <span className={`${styles.i}`}>
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
      </div>
    </section>
  );
}
