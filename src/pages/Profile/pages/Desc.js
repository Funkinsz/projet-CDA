import styles from "../Profile.module.scss";

export default function Desc({ user }) {
  return (
    <div className={`${styles.desc} d-flex m20`}>
      <div className={`${styles.desc_list} d-flex jcsa`}>
        <div className={`${styles.group_list}`}>
          <ul>
            <h3>Style :</h3>
            <li>ROCK</li>
            <li>JAZZ</li>
            <li>REGGAE</li>
          </ul>
        </div>
        <div className={`${styles.group_list}`}>
          <ul>
            <h3>Instruments :</h3>
            <li>Guitare</li>
            <li>Percu</li>
            <li>Clavier</li>
          </ul>
        </div>
        <div className={`${styles.group_list}`}>
          <ul>
            <h3>Equipement :</h3>
            <li>Stratocaster</li>
            <li>Cajon</li>
            <li>Korg</li>
          </ul>
        </div>
        <div className={`${styles.group_list}`}>
          <ul>
            <h3>Groupes :</h3>
            <li>Kool n the Grats</li>
            <li>Babacools</li>
            <li>Santa clavs</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.placeholder}`}>
        {user.desc_user === "" ? (
          <>
            <textarea
              name=""
              id=""
              placeholder="Commencez par vous présenter si vous souhaitez être vu ;)"></textarea>
          </>
        ) : (
          <>
            <p>{user.desc_user}</p>
          </>
        )}
      </div>
    </div>
  );
}
