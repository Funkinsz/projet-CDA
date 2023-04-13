import styles from './ContentPro.module.scss';

export default function ContentPro() {
    return (
        <section className={`${styles.section} section d-flex`}>
            <div className={`${styles.content} d-flex flex-column aic p10`}>
                content
            </div>
        </section>
    )
}