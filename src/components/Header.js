import styles from './Header.module.scss'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logoDark from "../assets/image/Logo/Logo noir Presta'.png";
import logoLight from "../assets/image/Logo/Logo blanc Presta'.png";


export default function Header() {
    // initialise le theme du site en dark mode avec un useState
    const [theme, setTheme] = useState('dark');

    // function qui switch le theme de dark a light en écoute sur un bouton
    const toggletheme = () => {
      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark')
      }
    }
  
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
    }, [prevScrollPos, visible, setVisible])
    
    return (
        <header 
            className={`d-flex jcsb ${theme}`}
            style={{top: visible ? "0" : "-131px"}}
        >
            <div 
                className={`mr20 ${styles.index}`}>
                <NavLink to = "/">
                    {
                        theme === 'dark'
                        ? (
                            <img src={logoDark} className={`${styles.logo}`}/>
                        ) : (
                            <img src={logoLight} className={`${styles.logo}`}/>
                        )
                    }
                </NavLink>
            </div>
            <div className={`d-flex m10 flex-fill aic jce mr20 search_bar index`}>
                <div className={`${styles.input} search d-flex`}>
                    <span className='d-flex aic'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input 
                        type="text" 
                        name="search_bar" 
                        id="search_bar" 
                        placeholder="Recherche..."
                        className='p10'
                    />
                </div>
            </div>

            <nav className="d-flex aic ml20 index">
                <ul className='d-flex flex-row'>
                    <li className='d-flex flex-column btn-box m5'>
                        <button className={`btn btn-primary ${styles.navbtn}`}>
                            USER
                        </button>      
                        <div className="divider"></div>
                    </li>

                    <li className='d-flex flex-column btn-box m5'>
                        <NavLink to = "/login">
                            <button className={`btn btn-primary ${styles.navbtn}`}>
                                CONNEXION
                            </button>
                        </NavLink>
                        <div className="divider"></div>
                    </li>
                    <li className='d-flex flex-column btn-box m5'>
                        <NavLink to = "/register">
                            <button className={`btn btn-primary ${styles.navbtn}`}>
                                INSCRIPTION
                            </button>
                            <div className="divider"></div>
                        </NavLink>
                    </li>
                </ul>

                <button className="toggle d-flex aic" onClick={toggletheme}>
                    <div className={theme === "light" ? "active " : 'dnone'}>
                        <i className="fa-regular fa-sun"></i>
                    </div>
                    <div className={theme === "dark" ? "active " : 'dnone'}>
                        <i className="fa-regular fa-moon"></i>
                    </div>
                </button>
            </nav>
        </header>
    )
}