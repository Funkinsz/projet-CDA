import styles from './Register.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
// import { createUser } from '../../apis/user'
import { useNavigate } from "react-router-dom"


export default function Register() {
    // toggle pour changer le formulaire d'inscription 
    // du statut professionnel au statut particulier
    const [user_type, setUserType] = useState('perso')

    const toggleUserType = () => {
        if (user_type === 'perso') {
            setUserType('pro')
        } else {
            setUserType('perso')
        }
    }

    // toggle pour afficher ou cacher le MDP lors de l'inscription
    const [passwordShow, setPasswordShow] = useState(false)

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
        console.log(passwordShow);
    }

    // Vérification du formulaire d'incription par la methode YUP
    const navigate = useNavigate()

    const validationSchema = yup.object({
        surname: yup
            .string()
            .required('Ce champs doit être saisi')
            .min(2, "Au moins 2 caractères"),
        email: yup
            .string()
            .required("Ce champs doit être saisi")
            .email("Email non valide"),
        password: yup
            .string()
            .required("Ce champs doit être saisi")
            .min(8, "Le mot de passe doit contenir 8 caractères"),
        confirmPSWD: yup
            .string()
            .required("Ce champs doit être saisi")
            .oneOf(
                [yup.ref("password"), ""],
                "Le mot de passe ne correspond pas"
            ),
        date: yup
            .string()
            .required("Ce champs doit être saisi")
    })

    const initialValues = {
        surname: "",
        email: "",
        password: "",
    }

    const { 
        handleSubmit,
        register,
        formState: {errors, isSubmitting},
    } = useForm({
        initialValues,
        resolver: yupResolver(validationSchema)
    })

    async function submit(values) {
        console.log(values);
        try {
            
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <div className={`${styles.log} log d-flex flex-fill flex-column jcc aic p20`}>
            <div className={`${styles.contentform} contentform d-flex aic jcc`}>
                <form onSubmit={handleSubmit(submit)} className={`${styles.form} d-flex flex-column aic jcc m5 p5`}>
                   {
                        user_type === 'perso' 
                        ? (
                            <>
                                <div className={`${styles.title} title d-flex flex-column aic m20`}>
                                    <h1 className={`${styles.titre} m5`}>INSCRIPTION</h1>
                                    <a onClick={toggleUserType}>Je suis un organisateur d'évènement</a>
                                </div>

                                <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                                    <label className='m5' name='surname' htmlFor="">Nom de scène</label>
                                    <input type="text" name='surname' {...register("surname", {
                                        required: {
                                            value: true,
                                            message: "Ce champs doit être rempli"
                                        }
                                    })} />
                                    {errors?.surname && <p className='error'>{errors.surname.message}</p>}
                                </div>
                            </>
                        ) : (
                            <>
                            <div className={`${styles.title} title d-flex flex-column aic m20`}>
                                <h1 className={`${styles.titre} m5`}>INSCRIPTION</h1>
                                <a onClick={toggleUserType}>Je suis un musicien / DJ</a>
                            </div>
        
                            <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                                <label className='m5' name='surname' htmlFor="">Nom de l'organisme</label>
                                <input type="text" name='surname' {...register("surname", {
                                    required: {
                                        value: true,
                                        message: "Ce champs doit être rempli"
                                    }
                                })} />
                                {errors?.surname && <p className='error'>{errors.surname.message}</p>}
                            </div>
                            </>
                        )
                    }    
                    <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                        <label className='m5' name='email' htmlFor="">Adresse e-mail</label>
                        <input type="email" name='email' {...register("email", {
                            required: {
                                value: true,
                                message: "Ce champs doit être rempli"
                            }
                        })} />
                        {errors?.email && <p className='error'>{errors.email.message}</p>}
                    </div>

                    <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                        <label className='m5' name='password' htmlFor="">Mot de passe</label>
                        <div className={`${styles.pswd} d-flex`}>
                            <input type={passwordShow ? "text" : "password"} name='password' {...register("password", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            <button type='button' onClick={togglePassword}>°</button>
                        </div>
                        {errors?.password && <p className='error'>{errors.password.message}</p>}
                    </div>

                    <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                        <label className='m5' name='confirmPSWD' htmlFor="">Confirmation du mot de passe</label>
                        <div className={`${styles.pswd} d-flex jcsb`}>
                            <input type={passwordShow ? "text" : "password"} name='confirmPSWD' {...register("confirmPSWD", {
                                required: {
                                    value: true,
                                    message: "Ce champs doit être rempli"
                                }
                            })} />
                            <button type='button' onClick={togglePassword}>°</button>
                        </div>
                        {errors?.confirmPSWD && <p className='error'>{errors.confirmPSWD.message}</p>}
                    </div>

                    <div className={`${styles.groupeform} groupeform d-flex flex-column m5 p10`}>
                        <label className='m5' name='date' htmlFor="">Date de naissance</label>
                        <input type="date" name='date' {...register("date", {
                            required: {
                                value: true,
                                message: "Ce choix doit être rempli"
                            }
                        })} />
                        {errors?.date && <p className='error'>{errors.date.message}</p>}
                    </div>

                    <div className={`${styles.btnform} btnform d-flex jcc`}>
                        <button type='submit' className='btn btn-primary'>
                            VALIDER
                        </button>
                    </div>
                </form>                
            </div>
        </div>               
    )
}