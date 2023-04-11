import styles from './Register.module.scss'
import { useState } from 'react'


export default function Register() {
    const [user_type, setUserType] = useState('perso')

    const toggleUserType = () => {
        if (user_type === 'perso') {
            setUserType('pro')
        } else {
            setUserType('perso')
        }
    }

    return(
        <div className={`${styles.log} log d-flex flex-fill flex-column jcc aic p20`}>
            {
                user_type === 'perso' 
                ? (
                    <div className={`${styles.contentform} contentform d-flex aic jcc`}>
                    <form className={`${styles.form} d-flex flex-column aic jcc m5 p5`}>
                        <div className={`${styles.title} title d-flex jcsb m10`}>
                            <h2 className={`${styles.titre} m5`}>INSCRIPTION</h2>
                            <a onClick={toggleUserType}>Je suis un organisateur d'évènement</a>
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='surname' htmlFor="">Nom de scène</label>
                            <input type="text" name='surname' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='email' htmlFor="">Adresse e-mail</label>
                            <input type="email" name='email' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='password' htmlFor="">Mot de passe</label>
                            <input type="password" name='password' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='confirmPSWD' htmlFor="">Confirmation du mot de passe</label>
                            <input type="password" name='confirmPSWD' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='date' htmlFor="">Date de naissance</label>
                            <input type="date" name='date' />
                        </div>
    
                        <div className={`${styles.btnform} btnform`}>
                            <button type='submit' className='btn btn-primary'>
                                VALIDER
                            </button>
                        </div>
                    </form>                
                </div>
                )
                : (
                    <div className={`${styles.contentform} contentform d-flex aic jcc`}>
                    <form className={`${styles.form} d-flex flex-column aic jcc m5 p5`}>
                        <div className={`${styles.title} title d-flex jcsb m10`}>
                            <h2 className={`${styles.titre} m5`}>INSCRIPTION</h2>
                            <a onClick={toggleUserType}>Je suis un musicien / DJ</a>
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='surname' htmlFor="">Nom de l'organisme</label>
                            <input type="text" name='surname' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='email' htmlFor="">Adresse e-mail</label>
                            <input type="email" name='email' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='password' htmlFor="">Mot de passe</label>
                            <input type="password" name='password' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='confirmPSWD' htmlFor="">Confirmation du mot de passe</label>
                            <input type="password" name='confirmPSWD' />
                        </div>
    
                        <div className={`${styles.groupeform} groupeform d-flex flex-column m10`}>
                            <label className='m5' name='date' htmlFor="">Date de naissance</label>
                            <input type="date" name='date' />
                        </div>
    
                        <div className={`${styles.btnform} btnform`}>
                            <button className='btn btn-primary'>
                                VALIDER
                            </button>
                        </div>
                    </form>                
                </div>
                )
            }
        </div>
    )
}