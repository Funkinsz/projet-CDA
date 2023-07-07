import Topbar from '../../../components/Topbar/Topbar';
import styles from './ArtSearch.module.scss';
import ContentArt from './Content/ContentArt';
import SidebarArt from './Sidebar/SidebarArt';

export default function ArtSearch() {
    return (
        <>
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