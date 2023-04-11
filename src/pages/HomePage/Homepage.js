import styles from './Homepage.module.scss'
import Carousel from '../Carousel/Carousel'
import { NavLink } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'

export default function Homepage() {
    return (
        <>
            <Carousel />
            <Topbar />
            <div className={`${styles.content} content d-flex flex-column jcc aic p20`}>
                <div className={`${styles.groupecontent} d-flex flex-column nowrap flex-fill aic jcc`}>
                    <NavLink to = "/newsletter">
                        <h2 className={`${styles.title} m30`}>News Letter</h2>
                    </NavLink>

                    <div className={`${styles.exemplecontent} exemplecontent m10 p10`}>
                        <h2 className={`d-flex ${styles.titles} p10`}>Content</h2>
                        <p className='p10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta nostrum. Quaerat consectetur dolore voluptatibus?
                        Nulla quis iure quod reprehenderit, eligendi cum harum itaque eaque dolores id explicabo? Obcaecati, cum?
                        Quo facilis consequuntur reiciendis eius, nihil nulla illo voluptatibus recusandae, optio sit expedita explicabo quia?
                        Beatae nemo, adipisci, fugiat, commodi ullam odio sint quaerat sed facere quod iste quisquam culpa!
                        Laboriosam fugiat voluptatem architecto harum ipsam obcaecati quis similique est repudiandae ullam, iste vitae perferendis.</p>
                    </div>

                    <div className={`${styles.divider} m30`}></div>

                    <div className={`${styles.exemplecontent} exemplecontent m10 p10`}>
                        <h2 className={`d-flex ${styles.titles} p10`}>Content</h2>
                        <p className='p10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta nostrum. Quaerat consectetur dolore voluptatibus?
                        Nulla quis iure quod reprehenderit, eligendi cum harum itaque eaque dolores id explicabo? Obcaecati, cum?
                        Quo facilis consequuntur reiciendis eius, nihil nulla illo voluptatibus recusandae, optio sit expedita explicabo quia?
                        Beatae nemo, adipisci, fugiat, commodi ullam odio sint quaerat sed facere quod iste quisquam culpa!
                        Laboriosam fugiat voluptatem architecto harum ipsam obcaecati quis similique est repudiandae ullam, iste vitae perferendis.</p>
                    </div>

                    <div className={`${styles.divider} m30`}></div>

                    <div className={`${styles.exemplecontent} exemplecontent m10 p10`}>
                        <h2 className={`d-flex ${styles.titles} p10`}>Content</h2>
                        <p className='p10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, soluta nostrum. Quaerat consectetur dolore voluptatibus?
                        Nulla quis iure quod reprehenderit, eligendi cum harum itaque eaque dolores id explicabo? Obcaecati, cum?
                        Quo facilis consequuntur reiciendis eius, nihil nulla illo voluptatibus recusandae, optio sit expedita explicabo quia?
                        Beatae nemo, adipisci, fugiat, commodi ullam odio sint quaerat sed facere quod iste quisquam culpa!
                        Laboriosam fugiat voluptatem architecto harum ipsam obcaecati quis similique est repudiandae ullam, iste vitae perferendis.</p>
                    </div>
                </div>
            </div>
        </>
    )
}