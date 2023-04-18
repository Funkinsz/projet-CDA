import styles from './ContentArt.module.scss'
import image from '../../../../assets/image/affiche_concert.jpg'

export default function ContentArt() {
    return (
        <section className={`${styles.section} section d-flex`}>
            <div className={`${styles.content} d-flex flex-row wrap aic p10`}>

                <div className={`${styles.groupcontent} groupcontent d-flex flex-column m10`}>
                    <div className={`${styles.img} img d-flex flex-column jcc aic`}>
                        <img className={`${styles.banner}`} src={image} alt="" />
                        <div className={`${styles.pp} pp d-flex aic jce`}>
                            <img src={image}  alt="" />
                        </div>
                    </div>
                    <span className={`d-flex flex-fill aic jcc p10`}>
                        <h3 className={`p5`}>NOM DE L'ARTISTE</h3>
                    </span>
                </div>

            </div>
        </section>
    )
}