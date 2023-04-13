import styles from './Login.module.scss'

export default function Login() {
    return(
        <div className={`${styles.log} log d-flex flex-fill flex-column jcc aic`}>
            <div className={`${styles.contentform} contentform d-flex aic jcc`}>
                <form className={`${styles.form} d-flex flex-column aic jcc m5 p30`}>
                    <h1 className={`${styles.titre} p5 m5`}>CONNEXION</h1>

                    <div className={`${styles.groupeform} groupeform d-flex flex-column m10 p10`}>
                        <label className='m5' name='email' htmlFor="">Adresse e-mail</label>
                        <input type="email" />
                    </div>

                    <div className={`${styles.groupeform} groupeform d-flex flex-column m10 p10`}>
                        <label className='m5' name='password' htmlFor="">Mot de passe</label>
                        <input type="password" />
                    </div>

                    <div className={`${styles.btnform} btnform d-flex jcc p20`}>
                        <button className='btn btn-primary'>
                            CONNEXION
                        </button>
                    </div>
                </form>                
            </div>
        </div>
    )
}