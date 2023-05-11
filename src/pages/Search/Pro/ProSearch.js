import AdsProvider from "../../../components/AdsProvider/Orga/AdsProvider";
import Carousel from "../../Carousel/Carousel";
import Topbar from "../../Topbar/Topbar";
import ContentPro from "./Content/ContentPro";
import styles from "./ProSearch.module.scss";
import SidebarPro from "./Sidebar/SidebarPro";

export default function ProSearch() {
  return (
    <>
      <Carousel />
      <Topbar />
      <div className="d-flex flex-fill">
        <section className={`${styles.container} d-flex flex-fill jcc`}>
          <AdsProvider>
            {/* <SidebarPro /> */}
            <ContentPro />
          </AdsProvider>
        </section>
      </div>
    </>
  );
}
