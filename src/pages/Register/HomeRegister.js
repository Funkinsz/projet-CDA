import Topbar from "../Topbar/Topbar"
import styles from "./Register.module.scss"
import { NavLink } from "react-router-dom"

export default function HomeRegister() {
    return (
        <>
            <Topbar />
            <div className={`${styles.content} d-flex flex-fill aic jcse`}>
                <NavLink to='/register-perso'>
                    <div className={`${styles.card} d-flex flex-column card`}>
                        <h2>PERSO</h2>
                    </div>
                </NavLink>
                <NavLink to='/register-pro'>
                    <div className={`${styles.card} d-flex flex-column card`}>
                        <h2>PRO</h2>
                    </div>
                </NavLink>
            </div>
        </>
    )
}