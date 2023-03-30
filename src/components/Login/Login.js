import styles from './Login.module.scss'

export default function Login() {
    return(
        <div className={`${styles.login} d-flex flex-column jcc aic`}>
            <form className={`${styles.formlogin} d-flex flex-column aic jcc`}>
                <h2 className={`${styles.titre}`}>CONNEXION</h2>
                <div className={`${styles.groupeform} d-flex flex-column`}>
                    <label className='m5' name='email' htmlFor="">Adresse e-mail</label>
                    <input type="email" />
                </div>

                <div className={`${styles.groupeform} d-flex flex-column`}>
                    <label className='m5' name='password' htmlFor="">Mot de passe</label>
                    <input type="password" />
                </div>

                <button className='btn btn-primary-reverse'>
                    Connexion
                </button>
            </form>
        </div>
    )
}