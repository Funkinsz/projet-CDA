import { useContext } from 'react';
import styles from './Profile.module.scss';
import { AuthContext } from '../../context/AuthContext';

export default function Profile() {
    const { user } = useContext(AuthContext)
    return(
        <div className={`flex-fill d-flex justify-content-center align-items-center`}>
            <div className={`${styles.profileContainer} card p20`}>
                <ul>
                    <li>Nom : { user.name }</li>
                    <li>Email : { user.email }</li>
                </ul>
            </div>
        </div>
    )
}