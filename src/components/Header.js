import styles from './Header.module.scss'
import {useEffect, useState} from 'react'


export default function Header() {
    const [theme, setTheme] = useState('light');

    const toggletheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light')
      }
    }
  
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);

    return (
        <header className={`d-flex jcsb p20 ${theme}`}>
            <div className="mr20 index">
                <h1 className={`${styles.logo}`}>LOGO</h1>
            </div>
            <div className="d-flex m10 flex-fill jce mr20 search_bar index">
                <div className='search d-flex'>
                    <span className='d-flex aic'>
                        <i class="fa-solid fa-magnifying-glass"></i>
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
                <div className='d-flex flex-column btn-box pl5'>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                        USER
                    </button>      
                    <div class="divider"></div>
                </div>
                <div className='d-flex flex-row'>                   
                    <div className='d-flex flex-column btn-box m5'>
                        <button className={`btn btn-primary ${styles.navbtn}`}>
                            CONNEXION
                        </button>
                        <div class="divider"></div>
                    </div>
                    <div className='d-flex flex-column btn-box m5'>
                        <button className={`btn btn-primary ${styles.navbtn}`}>
                            INSCRIPTION
                        </button>
                        <div class="divider"></div>
                    </div>              
                </div>

                <button className="toggle d-flex aic m5" onClick={toggletheme}>
                    <div className={theme === "light" ? "active " : 'dnone'}>
                        <i class="fa-regular fa-sun"></i>
                    </div>
                    <div className={theme === "dark" ? "active " : 'dnone'}>
                        <i class="fa-regular fa-moon"></i>
                    </div>
                </button>
            </nav>
        </header>
    )
}