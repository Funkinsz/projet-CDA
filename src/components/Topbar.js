import styles from './Topbar.module.scss'

export default function Topbar() {
    return (
        <div className={`${styles.topbar} d-flex`}>
            <div className={`${styles.topbarbtn} d-flex aic jcc`}>
                <a href="">
                    <h3>Organisme recherche groupe / JD</h3>
                </a>
            </div>

            <div className={`${styles.topbarbtn} ${styles.mid} d-flex aic jcc`}>
                <a href="">
                    <h3>Groupe recherche orga</h3>
                </a>
            </div>

            <div className={`${styles.topbarbtn} d-flex aic jcc`}>
                <a href="">
                    <h3>Musicien recherche groupe</h3>
                </a>
            </div>
        </div>
    )
}