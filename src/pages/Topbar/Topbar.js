import { NavLink } from 'react-router-dom'
import styles from './Topbar.module.scss'

export default function Topbar() {
    return (
        <div className={`${styles.topbar} d-flex`}>
            <div className={`${styles.topbarbtn} d-flex aic jcc`}>
                <NavLink to = "/pros">
                    <h3>Organisateurs</h3>
                </NavLink>
            </div>

            <div className={`${styles.topbarbtn} ${styles.mid} d-flex aic jcc`}>
                <NavLink to = "/bands">
                    <h3>Groupes</h3>
                </NavLink>                
            </div>

            <div className={`${styles.topbarbtn} d-flex aic jcc`}>
                <NavLink to = "/arts">
                    <h3>Artistes</h3>
                </NavLink>
            </div>
        </div>
    )
}