import Carousel from '../../Carousel/Carousel';
import Topbar from '../../Topbar/Topbar';
import styles from './ProSearch.module.scss';

export default function ProSearch() {
    return (
        <>
            <Carousel />
            <Topbar />
            <div className={`${styles.container} d-flex flex-fill jcc p5`}>
                <div className={`${styles.sidebar} d-flex flex-column aie p10`}>
                    sidebar
                </div>
                <div className={`${styles.content} d-flex flex-column aic p10`}>
                    content
                </div>
            </div>
        </>
    )
}