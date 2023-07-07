import Topbar from '../../Topbar/Topbar'
import styles from './BandSearch.module.scss'
import ContentBand from './Content/ContentBand'
import SidebarBand from './Sidebar/SidebarBand'

export default function BandSearch() {
    return (
        <>
            <Topbar />
            <div className='d-flex flex-fill'>
                <section className={`${styles.container} d-flex flex-fill jcc`}>
                    <SidebarBand />
                    <ContentBand />
                </section>
            </div>
        </>
    )
}