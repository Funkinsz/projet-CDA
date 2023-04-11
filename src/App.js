import styles from "./app.module.scss"
import Footer from "./components/Footer";
import Header from "./components/Header"
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
}

export default App;
