import styles from "./app.module.scss"
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Topbar from "./components/Topbar"

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Carousel />
      <Topbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
