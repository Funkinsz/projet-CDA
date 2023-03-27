import styles from './Carousel.module.scss'

export default function Carousel() {
    return (
        <div>
            <div className={`${styles.dividertop}`}></div>
            <div className={`${styles.carousel} d-flex`}>
                <div className={`${styles.btnarrow} d-flex aic jcc`}>
                    <div className={`${styles.point}`}>o</div>
                    <div className={`${styles.blocarrow}`}>
                        <div className={`${styles.badown}`}></div>
                        <div className={`${styles.baup}`}></div>
                    </div>
                </div>
                
            </div>
            <div className={`${styles.dividerbot}`}></div>
        </div>
    )
}