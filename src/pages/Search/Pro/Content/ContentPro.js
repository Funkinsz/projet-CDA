import styles from './ContentPro.module.scss';
import image from '../../../../assets/image/affiche_concert.jpg'

export default function ContentPro() {
    return (
        <section className={`${styles.section} section d-flex`}>
            <div className={`${styles.content} d-flex flex-column aic p10`}>
                <div className={`${styles.groupcontent} groupcontent d-flex m20`}>
                    <div className={`${styles.img} d-flex jcc aic`}>
                        <img src={image} alt="" />
                        <span className={`${styles.price}`}>
                            PRIX
                        </span>
                    </div>
                    <div className={`d-flex flex-fill flex-column p10`}>
                        <h2>TITRE</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                        </span>
                    </div>
                </div>

                <div className={`${styles.groupcontent} groupcontent d-flex m20`}>
                    <div className={`${styles.img} d-flex jcc aic`}>
                        <img src={image} alt="" />
                        <span className={`${styles.price}`}>
                            PRIX
                        </span>
                    </div>
                    <div className={`d-flex flex-fill flex-column p10`}>
                        <h2>TITRE</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                        </span>
                    </div>
                </div>

                <div className={`${styles.groupcontent} groupcontent d-flex m20`}>
                    <div className={`${styles.img} d-flex jcc aic`}>
                        <img src={image} alt="" />
                        <span className={`${styles.price}`}>
                            PRIX
                        </span>
                    </div>
                    <div className={`d-flex flex-fill flex-column p10`}>
                        <h2>TITRE</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                        </span>
                    </div>
                </div>

                <div className={`${styles.groupcontent} groupcontent d-flex m20`}>
                    <div className={`${styles.img} d-flex jcc aic`}>
                        <img src={image} alt="" />
                        <span className={`${styles.price}`}>
                            PRIX
                        </span>
                    </div>
                    <div className={`d-flex flex-fill flex-column p10`}>
                        <h2>TITRE</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                        </span>
                    </div>
                </div>

                <div className={`${styles.groupcontent} groupcontent d-flex m20`}>
                    <div className={`${styles.img} d-flex jcc aic`}>
                        <img src={image} alt="" />
                        <span className={`${styles.price}`}>
                            PRIX
                        </span>
                    </div>
                    <div className={`d-flex flex-fill flex-column p10`}>
                        <h2>TITRE</h2>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, similique.
                        </span>
                    </div>
                </div>

            </div>
        </section>
    )
}