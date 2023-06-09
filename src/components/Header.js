import styles from "./Header.module.scss";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoDark from "../assets/image/Logo/Logo noir Presta'.png";
import logoLight from "../assets/image/Logo/Logo blanc Presta'.png";
import { AuthContext } from "../context";

export default function Header() {
  const { user, signout } = useContext(AuthContext);

  // initialise le theme du site en dark mode avec un useState
  const [theme, setTheme] = useState("dark");

  // function qui switch le theme de dark a light en écoute sur un bouton
  const toggletheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // création de la classe qui fera la modification du style
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setVisible]);

  const [burger, setBurger] = useState(false);

  function toggleBurger() {
    setBurger(!burger);
  }

  return (
    <header
      className={`d-flex aic jcsb ${theme}`}
      style={{ top: visible ? "0" : "-131px" }}>
      <div className={`${styles.header} d-flex aic jcc p10`}>
        <div className={`mr20 ${styles.index}`}>
          <NavLink to="/">
            {theme === "dark" ? (
              <img src={logoDark} className={`${styles.logo}`} />
            ) : (
              <img src={logoLight} className={`${styles.logo}`} />
            )}
          </NavLink>
        </div>
        <div className={`d-flex m10 flex-fill aic jce mr20 search_bar`}>
          <div className={`${styles.input} search d-flex`}>
            <span className="d-flex aic">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              type="text"
              name="search_bar"
              id="search_bar"
              placeholder="Recherche..."
              className="p10"
            />
          </div>
        </div>

        <nav onClick={toggleBurger} className={`${styles.burger}`}>
          <i className="fa-solid fa-bars"></i>

          <ul
            style={{ display: !burger ? "none" : "flex" }}
            className={`${styles.myBurger} d-flex flex-row`}>
            <span onClick={toggleBurger} className={`${styles.cross}`}>
              <i className="fa-solid fa-xmark"></i>
            </span>
            {user ? (
              <>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink to={`/profile/${user.surname}`}>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      {user.surname.toUpperCase()}
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink onClick={() => signout()} to="/login">
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      DECONNEXION
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
              </>
            ) : (
              <>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      CONNEXION
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink
                    to="/home-register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      INSCRIPTION
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav className={`${styles.nav} d-flex aic ml20`}>
          <ul className="d-flex flex-row">
            {user ? (
              <>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink to={`/profile/${user.surname}`}>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      {user.surname.toUpperCase()}
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink onClick={() => signout()} to="/login">
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      DECONNEXION
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
              </>
            ) : (
              <>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      CONNEXION
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
                <li className="d-flex flex-column btn-box m5">
                  <NavLink
                    to="/home-register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                      INSCRIPTION
                    </button>
                  </NavLink>
                  <div className="divider"></div>
                </li>
              </>
            )}
          </ul>

          <button className="toggle d-flex aic" onClick={toggletheme}>
            <div className={theme === "light" ? "active " : "dnone"}>
              <i className="fa-regular fa-sun"></i>
            </div>
            <div className={theme === "dark" ? "active " : "dnone"}>
              <i className="fa-regular fa-moon"></i>
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}
