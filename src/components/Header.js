import styles from './Header.module.scss'
import {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {
    const [theme, setTheme] = useState('dark');

    const toggletheme = () => {
      if (theme === 'dark') {
        setTheme('light');
      } else {
        setTheme('dark')
      }
    }
  
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
        <header className={`d-flex jcsb p10 ${theme}`}>
            <div className="mr20 index">
                <NavLink to = "/">
                    <h1 className={`${styles.logo}`}>LOGO</h1>
                </NavLink>
            </div>
            <div className="d-flex m10 flex-fill jce mr20 search_bar index">
                <div className='search d-flex'>
                    <span className='d-flex aic'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input 
                        type="text" 
                        name="search_bar" 
                        id="search_bar" 
                        placeholder="Recherche..."
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

                <button className="toggle d-flex aic m5" onClick={toggletheme}>
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