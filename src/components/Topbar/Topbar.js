import { NavLink } from 'react-router-dom'
import styles from './Topbar.module.scss'

export default function Topbar() {
    return (
        <div className={`${styles.topbar} d-flex jcsa`}>
            <div className={`${styles.topbarbtn} d-flex aic jcc`}>
                <NavLink className={"d-flex aic jcc"} to = "/pros">
                    <h3>Organisateurs</h3>
                </NavLink>
            </div>

            <div className={`${styles.topbarbtn} ${styles.mid} d-flex aic jcc`}>
                <NavLink className={"d-flex aic jcc"} to = "/bands">
                    <h3>Groupes</h3>
                </NavLink>                
            </div>

            <div className={`${styles.topbarbtn} d-flex aic jcc`}>
                <NavLink className={"d-flex aic jcc"} to = "/arts">
                    <h3>Artistes</h3>
                </NavLink>
            </div>
        </div>
    )
}