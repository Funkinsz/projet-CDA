import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={`d-flex jcsb p20 box`}>
            <div className="mr20">
                <h1>LOGO</h1>
            </div>
            <div className="d-flex m10 flex-fill jce mr20 search_bar">
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
            <nav className="d-flex aic ml20">
                <div className='d-flex flex-column btn-box pl5'>
                    <button className={`btn btn-primary ${styles.navbtn}`}>
                        USER
                    </button>      
                    <div class="divider"></div>
                </div>
                <div className='d-flex flex-row'>                   
                    <div className='d-flex flex-column btn-box ml5'>
                        <button className={`btn btn-primary ${styles.navbtn}`}>
                            CONNEXION
                        </button>
                        <div class="divider"></div>
                    </div>
                    <div className='d-flex flex-column btn-box ml5'>
                        <button className={`btn btn-primary ${styles.navbtn}`}>
                            INSCRIPTION
                        </button>
                        <div class="divider"></div>
                    </div>              
                </div>
            </nav>
        </header>
    )
}