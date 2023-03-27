import styles from "./app.module.scss"
import Carousel from "./components/Carousel";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header"

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Carousel />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
