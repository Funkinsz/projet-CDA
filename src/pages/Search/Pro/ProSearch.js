import AdsProvider from "../../../components/AdsProvider/Orga/AdsProvider";
import Topbar from "../../../components/Topbar/Topbar";
import ContentPro from "./Content/ContentPro";
import styles from "./ProSearch.module.scss";

export default function ProSearch() {
  return (
    <>
      <Topbar />
      <div className="d-flex flex-fill bgDark-1">
        <section className={`${styles.container} d-flex flex-fill jcc`}>
          <AdsProvider>
            <ContentPro />
          </AdsProvider>
        </section>
      </div>
    </>
  );
}
