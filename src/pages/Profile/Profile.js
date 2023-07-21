import { useContext, useState } from "react";
import styles from "./Profile.module.scss";
import { AuthContext } from "../../context/AuthContext";
import Head from "./pages/Head";
import Desc from "./pages/Desc";
import Rate from "./pages/Rate";
import Avis from "./pages/Avis";

export default function Profile() {
  const { user } = useContext(AuthContext);

  const [previewImage, setPreviewImage] = useState("");

  if (user.profile_picture) {
    const uint8Array = new Uint8Array(user.profile_picture.data);

    const blob = new Blob([uint8Array]);

    const urlImage = URL.createObjectURL(blob);

    fetch(urlImage)
      .then((response) => response.text())
      .then((text) => {
        console.log(JSON.stringify(text));
        setPreviewImage(text); // envoie de l'image dans un useState
      })
      .catch((error) => console.log(error));
  }

  return (
    <section className={`${styles.section} flex-fill d-flex jcc p30`}>
      <div className={`${styles.profileContainer} d-flex flex-column`}>
        <Head user={user} previewImage={previewImage} />
        <Desc user={user} />

        <div className=" d-flex aic jcc m20">
          <div className={styles.divider}></div>
        </div>

        <div className={`${styles.body_profile} d-flex flex-fill`}>
          <Rate />
          <Avis />
        </div>
      </div>
    </section>
  );
}
