import { Suspense } from "react";
import styles from "./app.module.scss"
import AuthProvider from "./components/AuthProvider/AuthProvider";
import Footer from "./components/Footer";
import Header from "./components/Header"
import { Outlet, useLoaderData } from "react-router-dom";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <AuthProvider>
        <Header />
        <>
          <Suspense>
            <Outlet />
          </Suspense>
        </>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
