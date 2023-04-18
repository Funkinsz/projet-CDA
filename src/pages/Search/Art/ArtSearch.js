import Carousel from '../../Carousel/Carousel';
import Topbar from '../../Topbar/Topbar';
import styles from './ArtSearch.module.scss';
import ContentArt from './Content/ContentArt';
import SidebarArt from './Sidebar/SidebarArt';

export default function ArtSearch() {
    return (
        <>
            <Carousel />
            <Topbar />
            <div className='d-flex flex-fill'>
                <section className={`${styles.container} d-flex flex-fill jcc`}>
                    <SidebarArt />
                    <ContentArt />
                </section>
            </div>
        </>
    )
}